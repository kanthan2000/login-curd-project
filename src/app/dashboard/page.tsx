"use client";
import { useState } from "react";

// Dynamically import ReactQuill to avoid SSR issues
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

type Note = {
  id: number;
  content: string;
  lastModified: string;
};

export default function NotesDashboard() {
  const [showModal, setShowModal] = useState(false);
  const [editorValue, setEditorValue] = useState<string>("");
  const [notes, setNotes] = useState<Note[]>([]);

  const handleSave = () => {
    setNotes([
      ...notes,
      {
        id: Date.now(),
        content: editorValue,
        lastModified: new Date().toLocaleString(),
      },
    ]);
    setEditorValue("");
    setShowModal(false);
  };

  const handleDelete = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#f5f3e7] relative">
      {/* Navbar */}
      <nav className="bg-[#a7c7cc] px-8 py-3 flex justify-between items-center">
        <span className="text-xl font-bold text-[#2d3a3a]">Keep Notes</span>
        <div className="space-x-6">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/notes" className="hover:underline">
            Notes
          </a>
          <a href="/account" className="hover:underline">
            Account
          </a>
          <a href="/logout" className="hover:underline">
            Logout
          </a>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="px-8 pt-4 text-sm text-[#bfa77a]">
        Homepage /{" "}
        <span className="text-[#6b4f1d] font-semibold">Your Notes</span>
      </div>

      {/* Greeting */}
      <h1 className="px-8 pt-4 text-3xl font-bold text-[#5a4a2d]">
        Good Morning Deva!
      </h1>

      {/* Notes Grid */}
      <div className="flex flex-wrap gap-8 px-8 pt-8">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-white border border-[#a78c6d] rounded-lg shadow-md w-72 p-2 relative"
          >
            <div className="flex justify-between items-center border-b border-[#a78c6d] px-2 py-1 bg-[#f7d6b3] rounded-t-lg">
              <span className="text-sm font-semibold">Test</span>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(note.id)}
                title="Delete"
              >
                &#10006;
              </button>
            </div>
            <div
              className="p-2 min-h-[100px] text-[#5a4a2d] prose"
              dangerouslySetInnerHTML={{ __html: note.content }}
            />
            <div className="text-xs text-right text-[#bfa77a] px-2 pb-1">
              Last modified: {note.lastModified}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Note Button */}
      <button
        className="fixed bottom-8 right-8 bg-[#f7d6b3] hover:bg-[#eab88b] text-[#5a4a2d] rounded-full p-4 shadow-lg transition"
        onClick={() => setShowModal(true)}
        aria-label="Add Note"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="2"
            fill="#f7d6b3"
            stroke="#a78c6d"
          />
          <path stroke="#5a4a2d" strokeWidth="2" d="M12 8v8m4-4H8" />
        </svg>
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-[#f5f3e7] border border-[#a78c6d] rounded-lg shadow-lg w-[90vw] max-w-xl">
            {/* Modal Header */}
            <div className="flex justify-between items-center bg-[#f7d6b3] rounded-t-lg px-4 py-2 border-b border-[#a78c6d]">
              <span className="font-semibold">Test</span>
              <button
                className="text-red-500 hover:text-red-700 text-xl"
                onClick={() => setShowModal(false)}
                title="Close"
              >
                &#10006;
              </button>
            </div>
            {/* Modal Body */}
            <div className="p-4">
              {/* <ReactQuill
                value={editorValue}
                onChange={setEditorValue}
                className="bg-white rounded"
                theme="snow"
                placeholder="Write your note here..."
              /> */}
              <div className="flex justify-end gap-4 mt-4">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded"
                  onClick={() => setShowModal(false)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
