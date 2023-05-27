import React from 'react';
import { Typography } from '../Typo';

interface DataCardType {
    className?: string;
    title: string;
    content: string;
    imageUrl: string;
}

export const DataCard = ({ className, title, content, imageUrl, ...rest }: DataCardType) => {
    return (
        <div {...rest} className={`w-full max-w-sm rounded-lg border overflow-hidden mx-auto ${className ? className : ''}`}>
            <img src={imageUrl} alt={title} className="aspect-video object-cover" />
            <div className="mt-2 px-4 pb-4">
                <Typography variant="h4" colorVariant="info">
                    {title}
                </Typography>
                <Typography className="line-clamp-2">{content}</Typography>
            </div>
        </div>
    );
};

DataCard.displayName = 'DataCard';
