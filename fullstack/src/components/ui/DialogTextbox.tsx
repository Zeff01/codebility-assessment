'use client';

import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface DialogBoxProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
    onSave?: (newMessage: string) => void; // callback when saved
}

export default function DialogBox({
    isOpen,
    onClose,
    title,
    message,
    onSave,
}: DialogBoxProps) {
    const [editableMessage, setEditableMessage] = useState(message);

    // Reset editable message when dialog opens with a new message
    useEffect(() => {
        if (isOpen) setEditableMessage(message);
    }, [isOpen, message]);

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
                                <div className=" flex items-center justify-between">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-xl font-medium leading-6 text-gray-100"
                                    >
                                        {title}
                                    </Dialog.Title>
                                    <button
                                        type="button"
                                        className="cursor-pointer rounded-md bg-gray-700 text-gray-100 hover:text-gray-500 focus:outline-none"
                                        onClick={onClose}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Editable Message */}
                                <div className="mt-4">
                                    <textarea
                                        className="w-full rounded-md border border-gray-700 p-2 text-lg text-gray-100 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                        rows={4}
                                        autoCorrect='false'
                                        autoComplete='false'
                                        value={editableMessage}
                                        onChange={(e) => setEditableMessage(e.target.value)}
                                    />
                                </div>

                                {/* Footer */}
                                <div className="mt-4 flex justify-end gap-2">
                                    <button
                                        type="button"
                                        className="cursor-pointer inline-flex justify-center rounded-md border border-gray-300 bg-gray-700 px-4 py-2 text-sm font-medium text-gray-100 hover:bg-gray-500"
                                        onClick={onClose}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                                        onClick={() => {
                                            if (onSave && editableMessage.length > 0) 
                                                onSave(editableMessage);
                                            onClose();
                                        }}
                                    >
                                        Save
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
