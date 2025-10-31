if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker مسجل بنجاح:', registration.scope);
            })
            .catch(err => {
                console.log('فشل تسجيل Service Worker:', err);
            });
    });
}
