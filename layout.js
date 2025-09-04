/**
 * Kawanwa Stone - Shared Layout Initializer
 * This script injects the sidebar navigation into every page and handles its functionality.
 */

// HTML template for the sidebar component.
const sidebarHTML = `
    <!-- Sidebar -->
    <aside id="sidebar" class="sidebar bg-white w-64 p-6 flex-col flex-shrink-0 border-r border-slate-200 fixed lg:relative inset-y-0 left-0 transform -translate-x-full lg:translate-x-0 z-50">
        <div class="flex items-center justify-between">
            <h1 class="text-2xl font-bold text-indigo-600">Kawanwa Stone</h1>
            <button id="close-sidebar-btn" class="lg:hidden text-slate-500 hover:text-slate-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
        
        <nav class="mt-10 flex-grow">
            <ul class="space-y-2">
                <li><a href="index.html" class="nav-link flex items-center gap-3 p-3 rounded-lg font-medium"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>Dashboard</a></li>
                <li><a href="order-history.html" class="nav-link flex items-center gap-3 p-3 rounded-lg font-medium"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" /></svg>จัดการออเดอร์</a></li>
                <li><a href="stock.html" class="nav-link flex items-center gap-3 p-3 rounded-lg font-medium"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>จัดการสต็อค</a></li>
                <li><a href="intake.html" class="nav-link flex items-center gap-3 p-3 rounded-lg font-medium"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>รับของเข้า</a></li>
                <li><a href="expenses.html" class="nav-link flex items-center gap-3 p-3 rounded-lg font-medium"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 12.293a1 1 0 00-1.414 0l-4 4a1 1 0 001.414 1.414L10 14.414l2.293 2.293a1 1 0 001.414-1.414l-4-4z" /><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v8a1 1 0 11-2 0V3a1 1 0 011-1z" clip-rule="evenodd" /></svg>บัญชี</a></li>
                <li><a href="customers.html" class="nav-link flex items-center gap-3 p-3 rounded-lg font-medium"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3.005 3.005 0 013.75-2.906z" /></svg>ลูกค้า</a></li>
                <li><a href="suppliers.html" class="nav-link flex items-center gap-3 p-3 rounded-lg font-medium"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M8.433 7.418c.158-.103.346-.195.574-.277a6.99 6.99 0 01.566-.144c.645-.143 1.389-.023 1.943.372.554.395 1.012 1.042 1.012 1.845 0 .803-.458 1.45-1.012 1.845-.554.395-1.298.515-1.943.372a6.99 6.99 0 01-.566-.144c-.228-.082-.416-.174-.574-.277A2.991 2.991 0 016 10c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3c0-.131.008-.26.024-.388.026-.199.06-.395.105-.588.044-.193.098-.382.162-.564.064-.182.138-.358.22-.52.083-.162.175-.32.277-.472.102-.152.21-.297.324-.434.114-.137.235-.267.363-.388.128-.121.26-.235.398-.342a3.012 3.012 0 012.28-1.077c.28.006.554.054.82.144.266.09.524.22.768.388.244.168.475.378.688.622.213.244.408.522.576.828.168.306.306.638.408.992.102.354.162.724.176 1.104a3.01 3.01 0 01-2.05 2.766c-.22.094-.448.163-.682.204a7.01 7.01 0 01-.602.06c-.703.023-1.424-.104-2.048-.445-.624-.34-1.12-.89-1.382-1.592a3.012 3.012 0 010-1.114c.06-.272.154-.534.278-.78.125-.246.28-.475.462-.682a2.993 2.993 0 01.462-.462z" /><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 5a1 1 0 100 2 1 1 0 000-2zM6.343 11.657a1 1 0 10-1.414-1.414 4 4 0 010 5.656 1 1 0 101.414-1.414 2 2 0 000-2.828zM13.657 9.243a1 1 0 101.414 1.414 4 4 0 010 5.656 1 1 0 10-1.414-1.414 2 2 0 000-2.828z" /></svg>ผู้ขาย</a></li>
                <li><a href="report.html" class="nav-link flex items-center gap-3 p-3 rounded-lg font-medium"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>รายงาน</a></li>
            </ul>
        </nav>
        <div class="mt-auto pt-6 border-t border-slate-200">
            <p class="text-xs text-slate-400">&copy; ${new Date().getFullYear()} Kawanwa Stone</p>
        </div>
    </aside>
    <div id="sidebar-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 hidden lg:hidden"></div>
`;

/**
 * Initializes the shared layout by injecting the sidebar and setting up event listeners.
 */
function initializeLayout() {
    // 1. Inject Sidebar into the main flex container
    const mainContainer = document.querySelector('body > .flex');
    if (mainContainer) {
        mainContainer.insertAdjacentHTML('afterbegin', sidebarHTML);
    } else {
        console.error("Page structure is missing the main '.flex.min-h-screen' container.");
        return;
    }

    // 2. Set Active Nav Link based on the current page URL
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        link.classList.remove('active', 'bg-indigo-50', 'text-indigo-600'); // Reset all links
        if (linkPage === currentPage) {
            link.classList.add('active'); // Add active styles
        }
    });

    // 3. Add event listeners for sidebar functionality
    const sidebar = document.getElementById('sidebar');
    const openSidebarBtn = document.getElementById('open-sidebar-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    
    const openSidebar = () => { sidebar.classList.remove('-translate-x-full'); sidebarOverlay.classList.remove('hidden'); };
    const closeSidebar = () => { sidebar.classList.add('-translate-x-full'); sidebarOverlay.classList.add('hidden'); };

    if (openSidebarBtn) openSidebarBtn.addEventListener('click', openSidebar);
    if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);
}

// Automatically initialize the layout when the DOM is ready.
document.addEventListener('DOMContentLoaded', initializeLayout);
