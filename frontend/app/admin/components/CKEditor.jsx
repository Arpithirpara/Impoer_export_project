"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bold,
  Italic,
  Underline,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Link as LinkIcon,
  Quote,
  Code,
  RotateCcw,
  RotateCw,
} from "lucide-react";

export default function CKEditor({
  value = "",
  onChange,
  placeholder = "Write full blog article body content here...",
}) {
  const editorContainerRef = useRef(null);
  const editorInstanceRef = useRef(null);
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if script is already injected
    if (window.ClassicEditor) {
      setEditorLoaded(true);
      return;
    }

    const scriptId = "ckeditor5-cdn-script";
    let existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      existingScript = document.createElement("script");
      existingScript.id = scriptId;
      existingScript.src =
        "https://cdn.ckeditor.com/ckeditor5/39.0.1/classic/ckeditor.js";
      existingScript.async = true;
      existingScript.onload = () => setEditorLoaded(true);
      existingScript.onerror = () => {
        console.warn("CKEditor CDN load failed, using fallback rich editor.");
        setUseFallback(true);
      };
      document.body.appendChild(existingScript);
    } else {
      existingScript.addEventListener("load", () => setEditorLoaded(true));
    }
  }, []);

  useEffect(() => {
    if (useFallback || !editorLoaded || !editorContainerRef.current || editorInstanceRef.current) {
      return;
    }

    if (window.ClassicEditor) {
      window.ClassicEditor.create(editorContainerRef.current, {
        placeholder: placeholder,
        toolbar: [
          "heading",
          "|",
          "bold",
          "italic",
          "underline",
          "strikethrough",
          "|",
          "link",
          "bulletedList",
          "numberedList",
          "|",
          "outdent",
          "indent",
          "|",
          "blockQuote",
          "insertTable",
          "mediaEmbed",
          "|",
          "undo",
          "redo",
        ],
      })
        .then((editor) => {
          editorInstanceRef.current = editor;
          if (value) {
            editor.setData(value);
          }
          editor.model.document.on("change:data", () => {
            const data = editor.getData();
            if (onChange) onChange(data);
          });
        })
        .catch((err) => {
          console.error("CKEditor init error:", err);
          setUseFallback(true);
        });
    }

    return () => {
      if (editorInstanceRef.current) {
        editorInstanceRef.current
          .destroy()
          .then(() => {
            editorInstanceRef.current = null;
          })
          .catch(() => {});
      }
    };
  }, [editorLoaded, useFallback]);

  // Fallback Rich Text Formatting Helper
  const applyFallbackFormat = (command, value = null) => {
    document.execCommand(command, false, value);
    if (editorContainerRef.current && onChange) {
      onChange(editorContainerRef.current.innerHTML);
    }
  };

  return (
    <div className="ckeditor-custom-container" style={{ width: "100%" }}>
      {useFallback ? (
        <div
          style={{
            border: "1.5px solid #CBD5E1",
            borderRadius: "12px",
            overflow: "hidden",
            background: "#FFFFFF",
          }}
        >
          {/* Fallback Toolbar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              padding: "8px 12px",
              background: "#F8FAFC",
              borderBottom: "1px solid #E2E8F0",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              onClick={() => applyFallbackFormat("bold")}
              title="Bold"
              style={toolbarBtnStyle}
            >
              <Bold size={15} />
            </button>
            <button
              type="button"
              onClick={() => applyFallbackFormat("italic")}
              title="Italic"
              style={toolbarBtnStyle}
            >
              <Italic size={15} />
            </button>
            <button
              type="button"
              onClick={() => applyFallbackFormat("underline")}
              title="Underline"
              style={toolbarBtnStyle}
            >
              <Underline size={15} />
            </button>
            <span style={{ color: "#CBD5E1", margin: "0 4px" }}>|</span>
            <button
              type="button"
              onClick={() => applyFallbackFormat("formatBlock", "<h2>")}
              title="Heading 2"
              style={toolbarBtnStyle}
            >
              <Heading1 size={15} />
            </button>
            <button
              type="button"
              onClick={() => applyFallbackFormat("formatBlock", "<h3>")}
              title="Heading 3"
              style={toolbarBtnStyle}
            >
              <Heading2 size={15} />
            </button>
            <span style={{ color: "#CBD5E1", margin: "0 4px" }}>|</span>
            <button
              type="button"
              onClick={() => applyFallbackFormat("insertUnorderedList")}
              title="Bulleted List"
              style={toolbarBtnStyle}
            >
              <List size={15} />
            </button>
            <button
              type="button"
              onClick={() => applyFallbackFormat("insertOrderedList")}
              title="Numbered List"
              style={toolbarBtnStyle}
            >
              <ListOrdered size={15} />
            </button>
            <button
              type="button"
              onClick={() => applyFallbackFormat("formatBlock", "<blockquote>")}
              title="Quote"
              style={toolbarBtnStyle}
            >
              <Quote size={15} />
            </button>
          </div>

          <div
            ref={editorContainerRef}
            contentEditable
            onInput={(e) => onChange && onChange(e.currentTarget.innerHTML)}
            dangerouslySetInnerHTML={{ __html: value }}
            style={{
              minHeight: "220px",
              padding: "16px",
              outline: "none",
              color: "#0F172A",
              fontSize: "0.95rem",
              lineHeight: 1.6,
            }}
          />
        </div>
      ) : (
        <div ref={editorContainerRef} />
      )}

      {/* Custom Global CSS for CKEditor 5 Theme Integration */}
      <style jsx global>{`
        .ck-editor__editable_inline {
          min-height: 240px !important;
          padding: 16px 20px !important;
          font-size: 0.95rem !important;
          color: #0b192c !important;
          line-height: 1.65 !important;
          background: #ffffff !important;
          border-bottom-left-radius: 12px !important;
          border-bottom-right-radius: 12px !important;
        }
        .ck.ck-editor__main > .ck-editor__editable:focus {
          border-color: #16a34a !important;
          box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.15) !important;
        }
        .ck-toolbar {
          background: #f8fafc !important;
          border-top-left-radius: 12px !important;
          border-top-right-radius: 12px !important;
          border-color: #cbd5e1 !important;
          padding: 6px 10px !important;
        }
        .ck.ck-editor__top .ck-sticky-panel .ck-toolbar {
          border-radius: 12px 12px 0 0 !important;
        }
        .ck-editor__editable p {
          margin-bottom: 12px !important;
        }
      `}</style>
    </div>
  );
}

const toolbarBtnStyle = {
  background: "transparent",
  border: "1px solid #CBD5E1",
  borderRadius: "6px",
  padding: "5px 8px",
  cursor: "pointer",
  color: "#0F172A",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
