let shareMenuVisible = false;
        let menuIcon;

        window.onload = function () {
            menuIcon = document.querySelector(".menu-icon");
        }

        function toggleMenu(event) {
            const shareMenu = document.querySelector(".share-menu");
            const overlay = document.getElementById("overlay");

        if (menuIcon && !shareMenu.contains(event.target) && !menuIcon.contains(event.target) && shareMenuVisible) {
            shareMenu.style.display = "none";
            overlay.style.display = "none";
            shareMenuVisible = false;
        } else {
            shareMenu.style.display = shareMenuVisible ? "none" : "flex";
            overlay.style.display = shareMenuVisible ? "none" : "block";
            shareMenuVisible = !shareMenuVisible;
        }
    }

        function closeMenu() {
            const shareMenu = document.querySelector(".share-menu");
            const overlay = document.getElementById("overlay");

        shareMenu.style.display = "none";
        overlay.style.display = "none";
        shareMenuVisible = false;
    }

    function closePopup() {
        const popup = document.getElementById("popup");
        popup.style.display = "none";
    }

    function shareOnSocialMedia(platform) {
        const url = 'https://lizzyqueen.com'; // Replace with your website URL
        let shareUrl;

        switch (platform) {
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
                break;
            case 'whatsapp':
                shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            default:
                shareUrl = url;
        }

        window.open(shareUrl, '_blank');
    }

    function copyLink() {
        const url = 'https://lizzyqueen.com'; // Replace with your website URL
        navigator.clipboard.writeText(url)
            .then(() => {
                alert('Link copied to clipboard!');
            })
            .catch((err) => {
                console.error('Unable to copy link', err);
            });
    }

    document.addEventListener('DOMContentLoaded', function () {
        // Check if the age confirmation is stored in localStorage
        const isAgeConfirmed = localStorage.getItem('ageConfirmed');
    
        // If not confirmed, show the age verification pop-up
        if (!isAgeConfirmed) {
            document.getElementById('ageVerification').style.display = 'flex';
        }
    });
    
    function confirmAge() {
        // Set the age confirmation in localStorage
        localStorage.setItem('ageConfirmed', 'true');
    
        // Hide the age verification pop-up
        document.getElementById('ageVerification').style.display = 'none';
    }