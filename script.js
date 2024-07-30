function runCode() {
    const htmlCode = document.getElementById('html-editor').value;
    const cssCode = `<style>${document.getElementById('css-editor').value}</style>`;
    const jsCode = `<script>${document.getElementById('js-editor').value}<\/script>`;

    const iframe = document.getElementById('output');
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    iframeDoc.open();
    iframeDoc.write(htmlCode + cssCode + jsCode);
    iframeDoc.close();
}
