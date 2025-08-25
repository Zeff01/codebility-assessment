'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface DialogBoxProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
    onConfirm?: () => void; // callback if user clicks Yes
    onCancel?: () => void;  // callback if user clicks No
}

export default function DialogBox({
    isOpen,
    onClose,
    title,
    message,
    onConfirm,
    onCancel,
}: DialogBoxProps) {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                {/* Backdrop */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-50"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-50"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black opacity-50" />
                </Transition.Child>

                {/* Modal panel */}
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="bg-gray-800 w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                                {/* Header */}
                                <div className="flex items-center justify-between">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-xl font-medium leading-6 text-gray-100"
                                    >
                                        {title}
                                    </Dialog.Title>
                                    <button
                                        type="button"
                                        className="cursor-pointer rounded-md text-gray-400 hover:text-gray-200 focus:outline-none"
                                        onClick={onClose}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Message */}
                                <div className="mt-4">
                                    <p className="text-gray-200 text-base">{message}</p>
                                </div>

                                {/* Footer - Yes / No buttons */}
                                <div className="mt-6 flex justify-end gap-3">
                                    <button
                                        type="button"
                                        className="cursor-pointer inline-flex justify-center rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-600"
                                        onClick={() => {
                                            if (onCancel) onCancel();
                                            onClose();
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                                        onClick={() => {
                                            if (onConfirm) onConfirm();
                                            onClose();
                                        }}
                                    >
                                        Confirm
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
