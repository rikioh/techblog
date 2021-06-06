module.exports = {
    formatDate: (date) => {
        try {
            return date.toLocaleDateString()
        } catch (error) {
            return ''
        }
    }
}