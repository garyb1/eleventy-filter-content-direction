/** Simple right to left paragraph scrolling */
module.exports = (object, direction) => {
    return `
        <div dir="${['ltr', 'rtl'].includes(direction) ? direction : 'auto'}">
            ${object}
        </div>
    `;
}