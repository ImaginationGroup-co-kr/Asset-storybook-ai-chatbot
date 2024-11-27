import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

import styles from './markdown.module.css';

export interface MarkdownProps {
  message: string;
}

/** Primary UI component for user interaction */
export const Markdown = ({ message, ...Props }: MarkdownProps) => {
  return (
    <ReactMarkdown
      {...Props}
      remarkPlugins={[remarkGfm, remarkBreaks]}
      components={{
        a: ({ ...props }) => (
          <a
            {...props}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          />
        ),
        p: ({ ...props }) => <p {...props} className={styles.paragraph} />,
        h1: ({ ...props }) => <h1 {...props} className={styles.heading1} />,
        h2: ({ ...props }) => <h2 {...props} className={styles.heading2} />,
        h3: ({ ...props }) => <h3 {...props} className={styles.heading3} />,
        table: ({ ...props }) => (
          <div className={styles.tableWrapper}>
            <table {...props} className={styles.table} />
          </div>
        ),
        thead: ({ ...props }) => (
          <thead {...props} className={styles.tableHead} />
        ),
        tbody: ({ ...props }) => (
          <tbody {...props} className={styles.tableBody} />
        ),
        tr: ({ ...props }) => <tr {...props} className={styles.tableRow} />,
        td: ({ ...props }) => <td {...props} className={styles.tableCell} />,
        th: ({ ...props }) => <th {...props} className={styles.tableHeader} />,
        ul: ({ ...props }) => (
          <ul {...props} className={styles.unorderedList} />
        ),
        ol: ({ ...props }) => <ol {...props} className={styles.orderedList} />,
        li: ({ ...props }) => <li {...props} className={styles.listItem} />,
      }}
    >
      {message.replaceAll('~', '\\~')}
    </ReactMarkdown>
  );
};
