import React from 'react';
import SyntaxHighlighter from "react-syntax-highlighter";
import monokai from "react-syntax-highlighter/dist/esm/styles/hljs/monokai";


const CodeBlock = () => {
    const myCode = `
    const coder = {
      name: 'Leo Duong',
      skills: ['React', 'MySQL', 'MongoDB', 'Docker', 'AWS'],
      hardWorker: true,
      quickLeaner: true,
      problemsSolver: true,
      hireAble: function(requiredSkills) {
        const matchCount = requiredSkills.filter(skill => this.skills.includes(skill)).length;
        return (
            this.hardWorker &&
            this.quickLeaner &&
            this.problemsSolver &&
            matchCount / requiredSkills.length >= 0.7;
        );
      };
    }
    `;

    return (
        <SyntaxHighlighter language='javascript' style={monokai}>
            {myCode}
        </SyntaxHighlighter>
    );

};



export default CodeBlock;






