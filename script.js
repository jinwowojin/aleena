// ✅ Original Posts List with Comments
const posts = [
    { id: 1, title: "Come play with me", description: "", thumbnail: "images/img1.jpg", isPremium: false, likes: 12, comments: ["Ali: ap beautiful ho", "John: wow beauty", "max: please new video im waiting"], shares: 2 },
    { id: 2, title: "19 years old sweet girl", description: "Video Full Length: ▶5:50", video: "images/vid1.mp4", isPremium: true, price: 20, likes: 18, comments: ["Ahmed: wow areeba!", "Mike: yummy video", "Hassan: new video kab ayegi please"], shares: 10 },
    { id: 3, title: "", description: "", thumbnail: "images/img4.jpg", isPremium: false, likes: 9, comments: ["Hassan : ap bohut haseen hain ", "kpkHamza: queen!", "karachi: pls new video",], shares: 1 },
    { id: 4, title: "Pretty little shy girl really loves", description: "Video Full Length: ▶5:15", video: "images/vid3.mp4", isPremium: true, price: 20, likes: 16, comments: ["Usman : Soo cute girl", "salman : full video amazing hain thanks",], shares: 8 },
    { id: 5, title: "Hope you like it", description: "", thumbnail: "images/img3.jpg", isPremium: false, likes: 11, comments: ["Bilal: Nice click", "trump: wow cutiepie",], shares: 2 },
    { id: 6, title: "", description: "", thumbnail: "images/img2.jpg", isPremium: false, likes: 14, comments: ["Zaid : Lovely baby"], shares: 3 },
    { id: 7, title: "A cute girl playing with her toys", description: "Video Full Length: ▶4:41", video: "images/vid2.mp4", isPremium: true, price: 20, likes: 19, comments: ["Farhan: full video me maza hain cute", "David : Awesome video ", "amir: aur video kab aayegi apki"], shares: 12 },
    { id: 8, title: "", description: "", thumbnail: "images/img6.jpg", isPremium: false, likes: 13, comments: ["Tariq: So beautiful and young", "Jhon: awesome body", "miz: yummy girl", "huzaifa: cutepie", "ali: wow"], shares: 1 },
    { id: 9, title: "Young cute girl with perfect body", description: "Video Full Length: ▶5:46", video: "images/vid4.mp4", isPremium: true, price: 20, likes: 20, comments: ["Imran: Perfect girl", "Chris: Love it"], shares: 15 },
    { id: 10, title: "Sweet Morning", description: "", thumbnail: "images/img5.jpg", isPremium: false, likes: 10, comments: ["Hamza: Good morning vibes", "Raheel: mene apsi jaisi beautiful larki nhi dekhi ", "punk: small girl nice", "romi: beautiful click"], shares: 2 },
];


lucide.createIcons();

const postsContainer = document.getElementById('postsContainer');
let currentPostId = null;

// ✅ Render Posts
function renderPosts() {
    postsContainer.innerHTML = posts.map(post => `
        <div class="post-card">
            <div class="post-media-container">
                ${post.video 
                    ? `<video width="100%" controls controlsList="nodownload">
                        <source src="${post.video}" type="video/mp4">
                        Your browser does not support the video tag.
                      </video>`
                    : post.thumbnail 
                      ? `<img src="${post.thumbnail}" alt="${post.title}" width="100%">`
                      : `<p>No media available</p>`
                }
                ${post.isPremium ? `<button class="buy-btn" onclick="openPaymentModal(${post.id})">Watch Full Video - $${post.price}</button>` : ''}
            </div>
            <div class="post-content">
                <h3 class="post-title">${post.title}</h3>
                <p class="post-description">${post.description}</p>
                <div class="post-stats">
                    <button class="stat-btn like-btn">
                        <i class="heart-icon" data-lucide="heart"></i> <span>${post.likes}</span>
                    </button>
                    <button class="stat-btn" onclick="openCommentsModal(${post.id})">
                        <i data-lucide="message-circle"></i> <span>${post.comments.length}</span>
                    </button>
                    <button class="stat-btn">
                        <i data-lucide="share-2"></i> <span>${post.shares}</span>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    lucide.createIcons();
}

// ✅ Open Comments Modal
function openCommentsModal(postId) {
    currentPostId = postId;
    const modal = document.getElementById("commentsModal");
    modal.style.display = "flex";

    // Comments Show karna
    const commentsList = document.getElementById("commentsList");
    const post = posts.find(p => p.id === postId);
    commentsList.innerHTML = post.comments.map(comment => `<p>${comment}</p>`).join('');
}

// ✅ Add New Comment
function addComment() {
    const newComment = document.getElementById("newComment").value;
    if (newComment.trim() !== "" && currentPostId !== null) {
        const post = posts.find(p => p.id === currentPostId);
        post.comments.push(newComment);
        document.getElementById("newComment").value = "";
        openCommentsModal(currentPostId); // Refresh comments list
        renderPosts(); // Update comment count
    }
}

// ✅ Close Comments Modal
function closeCommentsModal() {
    document.getElementById("commentsModal").style.display = "none";
}

// ✅ Payment Modal Open Function
function openPaymentModal(postId) {
    document.getElementById("paymentModal").style.display = "flex";
}

// ✅ Close Payment Modal
function closePaymentModal() {
    document.getElementById("paymentModal").style.display = "none";
}

// ✅ Show Payment Image
function showPaymentImage(method) {
    document.getElementById("paymentImage").src = method === 'paypal' ? "images/paypal.jpg" : "images/hbl.png";
    document.getElementById("paymentImage").style.display = "block";
}

// ✅ Age Verification
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ageModal").style.display = "flex";  
});
function confirmAge(isAdult) {
    document.getElementById("ageModal").style.display = isAdult ? "none" : window.location.href = "https://www.google.com";
}

// ✅ Initial Render
renderPosts();