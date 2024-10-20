"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="relative m-0 h-screen w-screen bg-[#0C2D48]/50"
      onClose={onDismiss}
    >
      <div className="m-auto h-4/5 max-w-[75%] p-10">
        <div className="relative rounded">
          <button
            onClick={onDismiss}
            className="close-button absolute right-6 top-6"
          >
            <svg
              className="h-9 w-9 rounded-full bg-[#0C2D48]/90 p-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              role="img"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              data-icon="XStandard"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.5858 12L2.29291 3.70706L3.70712 2.29285L12 10.5857L20.2929 2.29285L21.7071 3.70706L13.4142 12L21.7071 20.2928L20.2929 21.7071L12 13.4142L3.70712 21.7071L2.29291 20.2928L10.5858 12Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          {children}
        </div>
      </div>
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
