import { useState, useEffect } from 'react';
import { message } from 'antd';

type MessageType = 'success' | 'error';

export const useMessage = () => {
    const [messageContent, setMessageContent] = useState<string>('');
    const [messageType, setMessageType] = useState<MessageType | null>(null);

    useEffect(() => {
        if (messageType) {
            message[messageType](messageContent);
        }
    }, [messageContent, messageType]);

    const showMessage = (type: MessageType, content: string) => {
        setMessageType(type);
        setMessageContent(content);
    };

    const showSuccess = (content: string) => {
        showMessage('success', content);
    };

    const showError = (content: string) => {
        showMessage('error', content);
    };

    return { showSuccess, showError };
};