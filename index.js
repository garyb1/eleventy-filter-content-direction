/** Simple right to left paragraph scrolling */
module.exports = (object, direction = 'rtl') => {
    return `
        <div dir="${direction || 'ltr'}">
            ${object}
        </div>
    `;
}