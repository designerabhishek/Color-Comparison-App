document.addEventListener('DOMContentLoaded', function() {
    const colorToggle = document.getElementById('color-toggle');
    const warning = document.getElementById('warning');

    // Check for OKLCH support
    const supportsOKLCH = CSS.supports('color', 'oklch(0.98 0.05 95)');
    if (!supportsOKLCH) {
        warning.classList.remove('hidden');
    }

    colorToggle.addEventListener('click', function() {
        if (document.body.classList.contains('hd-colors')) {
            document.body.classList.remove('hd-colors');
            document.body.classList.add('light-mode');

            document.querySelector('header').classList.remove('hd-colors');
            document.querySelector('header').classList.add('light-mode');

            document.querySelectorAll('a').forEach(el => {
                el.classList.remove('hd-colors');
                el.classList.add('light-mode');
            });

            document.querySelectorAll('.color-box').forEach(el => {
                el.classList.remove('hd-colors');
                el.classList.add('light-mode');
            });

            colorToggle.textContent = 'Switch to HD Colors';
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('hd-colors');

            document.querySelector('header').classList.remove('light-mode');
            document.querySelector('header').classList.add('hd-colors');

            document.querySelectorAll('a').forEach(el => {
                el.classList.remove('light-mode');
                el.classList.add('hd-colors');
            });

            document.querySelectorAll('.color-box').forEach(el => {
                el.classList.remove('light-mode');
                el.classList.add('hd-colors');
            });

            colorToggle.textContent = 'Switch to Standard Colors';
        }
    });
});
