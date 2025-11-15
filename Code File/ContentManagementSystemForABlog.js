// CMS Application JavaScript

class CMSApplication {
    constructor() {
        this.data = this.initializeData();
        this.currentSection = 'dashboard';
        this.currentUser = this.data.users[0]; // Admin user
        this.autoSaveInterval = null;
        this.selectedComponent = null;
        this.editorMode = 'edit';
        
        this.init();
    }

    initializeData() {
        // Initialize with provided JSON data
        return {
            "users": [
                {
                    "id": "user_1",
                    "username": "admin",
                    "email": "admin@example.com", 
                    "role": "admin",
                    "displayName": "Admin User",
                    "avatar": "https://i.pravatar.cc/150?img=1",
                    "createdAt": "2024-01-01T00:00:00Z",
                    "lastLogin": "2024-12-01T10:00:00Z"
                },
                {
                    "id": "user_2", 
                    "username": "editor",
                    "email": "editor@example.com",
                    "role": "editor", 
                    "displayName": "Content Editor",
                    "avatar": "https://i.pravatar.cc/150?img=2",
                    "createdAt": "2024-01-15T00:00:00Z",
                    "lastLogin": "2024-12-01T09:30:00Z"
                }
            ],
            "pages": [
                {
                    "id": "page_1",
                    "title": "Home Page",
                    "slug": "home",
                    "template": "home",
                    "status": "published",
                    "author": "user_1",
                    "createdAt": "2024-01-01T00:00:00Z",
                    "updatedAt": "2024-11-30T15:30:00Z",
                    "publishedAt": "2024-01-01T12:00:00Z",
                    "seoTitle": "Welcome to My Website",
                    "seoDescription": "A modern website built with our powerful CMS",
                    "components": [
                        {
                            "id": "comp_1",
                            "type": "hero",
                            "content": "Welcome to My Website",
                            "subtitle": "Build amazing websites with our drag-and-drop CMS",
                            "backgroundImage": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop",
                            "buttonText": "Get Started",
                            "buttonUrl": "#",
                            "styles": {"textAlign": "center", "padding": "80px 20px", "color": "white"}
                        },
                        {
                            "id": "comp_2", 
                            "type": "features",
                            "title": "Why Choose Our CMS?",
                            "features": [
                                {"icon": "drag", "title": "Drag & Drop Builder", "description": "Create pages visually with our intuitive builder"},
                                {"icon": "responsive", "title": "Responsive Design", "description": "Your site looks great on all devices"},  
                                {"icon": "fast", "title": "Lightning Fast", "description": "Optimized for speed and performance"}
                            ]
                        }
                    ]
                },
                {
                    "id": "page_2",
                    "title": "About Us", 
                    "slug": "about",
                    "template": "page",
                    "status": "published",
                    "author": "user_1",
                    "createdAt": "2024-01-10T00:00:00Z",
                    "updatedAt": "2024-11-25T14:20:00Z",
                    "publishedAt": "2024-01-10T10:00:00Z",
                    "seoTitle": "About Our Company", 
                    "seoDescription": "Learn more about our mission and values",
                    "components": [
                        {
                            "id": "comp_3",
                            "type": "header",
                            "content": "About Our Company",
                            "tag": "h1"
                        },
                        {
                            "id": "comp_4",
                            "type": "paragraph", 
                            "content": "We are a innovative technology company focused on creating powerful yet easy-to-use content management solutions."
                        }
                    ]
                }
            ],
            "posts": [
                {
                    "id": "post_1",
                    "title": "Getting Started with Our CMS",
                    "slug": "getting-started-cms",
                    "content": "<h2>Welcome to the Future of Content Management</h2><p>Our CMS revolutionizes how you create and manage content. With powerful drag-and-drop tools and an intuitive interface, you can build professional websites in minutes, not hours.</p><h3>Key Features</h3><ul><li>Visual page builder with real-time preview</li><li>Responsive design out of the box</li><li>Advanced user management and permissions</li><li>SEO optimization tools</li><li>Built-in analytics and reporting</li></ul><p>Whether you're a blogger, business owner, or developer, our CMS adapts to your needs and grows with your business.</p>",
                    "excerpt": "Discover how our revolutionary CMS makes website creation easier than ever with powerful drag-and-drop tools and intuitive design.",
                    "author": "user_1",
                    "status": "published", 
                    "publishedAt": "2024-11-15T09:00:00Z",
                    "createdAt": "2024-11-14T16:30:00Z",
                    "updatedAt": "2024-11-15T08:45:00Z",
                    "categories": ["tutorials", "getting-started"],
                    "tags": ["cms", "website-builder", "tutorial"],
                    "featuredImage": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
                    "seoTitle": "CMS Tutorial: Getting Started Guide",
                    "seoDescription": "Complete guide to getting started with our powerful CMS platform"
                },
                {
                    "id": "post_2", 
                    "title": "Advanced Design Techniques",
                    "slug": "advanced-design-techniques",
                    "content": "<h2>Taking Your Designs to the Next Level</h2><p>Ready to create stunning, professional websites? This guide covers advanced techniques for maximizing the potential of our visual page builder.</p><h3>Advanced Layout Techniques</h3><p>Learn how to create complex, multi-column layouts that adapt beautifully to any screen size. Our grid system makes it easy to achieve pixel-perfect designs.</p><h3>Custom Styling Options</h3><p>Dive deep into our styling system to create unique, branded experiences that stand out from the competition.</p>",
                    "excerpt": "Master advanced design techniques and create stunning, professional websites with our comprehensive guide.",
                    "author": "user_2",
                    "status": "published",
                    "publishedAt": "2024-11-20T11:30:00Z", 
                    "createdAt": "2024-11-18T14:15:00Z",
                    "updatedAt": "2024-11-20T11:15:00Z",
                    "categories": ["design", "tutorials"],
                    "tags": ["design", "advanced", "layouts"],
                    "featuredImage": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop", 
                    "seoTitle": "Advanced Web Design Techniques with CMS",
                    "seoDescription": "Professional design techniques for creating beautiful websites"
                },
                {
                    "id": "post_3",
                    "title": "SEO Best Practices for Your Website", 
                    "slug": "seo-best-practices",
                    "content": "<h2>Optimize Your Content for Search Engines</h2><p>Search engine optimization is crucial for getting your content discovered. Our CMS includes powerful SEO tools to help you rank higher in search results.</p><h3>Built-in SEO Features</h3><ul><li>Automatic XML sitemap generation</li><li>Meta tags optimization</li><li>Schema markup support</li><li>Page speed optimization</li><li>Mobile-first indexing ready</li></ul><p>Follow these best practices to maximize your website's visibility and drive more organic traffic to your content.</p>",
                    "excerpt": "Learn essential SEO techniques and leverage our built-in optimization tools to improve your search rankings.",
                    "author": "user_1", 
                    "status": "draft",
                    "createdAt": "2024-11-25T10:00:00Z",
                    "updatedAt": "2024-11-25T16:45:00Z", 
                    "categories": ["seo", "marketing"],
                    "tags": ["seo", "optimization", "search"],
                    "featuredImage": "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=400&fit=crop",
                    "seoTitle": "SEO Best Practices: Complete Guide",
                    "seoDescription": "Master SEO with our comprehensive guide and built-in optimization tools"
                }
            ],
            "categories": [
                {"id": "cat_1", "name": "tutorials", "slug": "tutorials", "description": "Step-by-step guides and tutorials"},
                {"id": "cat_2", "name": "getting-started", "slug": "getting-started", "description": "Getting started guides"}, 
                {"id": "cat_3", "name": "design", "slug": "design", "description": "Design tips and techniques"},
                {"id": "cat_4", "name": "seo", "slug": "seo", "description": "Search engine optimization"},
                {"id": "cat_5", "name": "marketing", "slug": "marketing", "description": "Marketing strategies and tips"}
            ],
            "media": [
                {"id": "media_1", "filename": "hero-bg.jpg", "url": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop", "type": "image", "size": "245KB", "uploadedAt": "2024-11-01T10:00:00Z"},
                {"id": "media_2", "filename": "about-team.jpg", "url": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop", "type": "image", "size": "180KB", "uploadedAt": "2024-11-05T14:30:00Z"},
                {"id": "media_3", "filename": "blog-featured.jpg", "url": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop", "type": "image", "size": "165KB", "uploadedAt": "2024-11-10T09:15:00Z"}
            ],
            "settings": {
                "siteName": "My Professional Website",
                "tagline": "Built with Advanced CMS Technology", 
                "theme": "professional",
                "language": "en",
                "timezone": "UTC",
                "dateFormat": "YYYY-MM-DD",
                "postsPerPage": 10,
                "commentSystem": "enabled",
                "socialMedia": {
                    "facebook": "https://facebook.com/mysite",
                    "twitter": "https://twitter.com/mysite", 
                    "linkedin": "https://linkedin.com/company/mysite"
                },
                "seo": {
                    "metaTitle": "Professional Website - Advanced CMS",
                    "metaDescription": "A modern, professional website built with our advanced content management system",
                    "analyticsId": "GA-XXXXXXXXX"
                }
            },
            "templates": [
                {"id": "home", "name": "Home Page", "description": "Hero section with features showcase"},
                {"id": "page", "name": "Standard Page", "description": "Basic page layout with header and content"},
                {"id": "blog", "name": "Blog Archive", "description": "Blog posts listing with pagination"}, 
                {"id": "contact", "name": "Contact Page", "description": "Contact form with company information"},
                {"id": "gallery", "name": "Photo Gallery", "description": "Image gallery with lightbox"}
            ],
            "components": [
                {"type": "header", "name": "Heading", "icon": "H", "category": "text"},
                {"type": "paragraph", "name": "Paragraph", "icon": "P", "category": "text"},
                {"type": "image", "name": "Image", "icon": "IMG", "category": "media"},
                {"type": "gallery", "name": "Gallery", "icon": "GAL", "category": "media"},
                {"type": "button", "name": "Button", "icon": "BTN", "category": "interactive"},
                {"type": "form", "name": "Contact Form", "icon": "FORM", "category": "interactive"},
                {"type": "columns", "name": "Columns", "icon": "COL", "category": "layout"},
                {"type": "hero", "name": "Hero Section", "icon": "HERO", "category": "layout"},
                {"type": "features", "name": "Features Grid", "icon": "FEAT", "category": "layout"},
                {"type": "testimonial", "name": "Testimonial", "icon": "TEST", "category": "content"},
                {"type": "video", "name": "Video", "icon": "VID", "category": "media"},
                {"type": "map", "name": "Map", "icon": "MAP", "category": "interactive"}
            ]
        };
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupApplication();
            });
        } else {
            this.setupApplication();
        }
    }

    setupApplication() {
        this.setupEventListeners();
        this.renderDashboard();
        this.startAutoSave();
        this.setupKeyboardShortcuts();
        
        // Show dashboard by default
        this.switchSection('dashboard');
    }

    setupEventListeners() {
        // Navigation - Fixed event delegation
        document.addEventListener('click', (e) => {
            const menuItem = e.target.closest('.menu-item');
            if (menuItem && menuItem.dataset.section) {
                e.preventDefault();
                this.switchSection(menuItem.dataset.section);
            }
        });

        // Main action buttons - Fixed with proper event delegation
        const createNewBtn = document.getElementById('create-new-btn');
        if (createNewBtn) {
            createNewBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showCreateMenu();
            });
        }

        const saveAllBtn = document.getElementById('save-all-btn');
        if (saveAllBtn) {
            saveAllBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.saveAll();
            });
        }

        // Page management - Fixed event listeners
        const createPageBtn = document.getElementById('create-page-btn');
        if (createPageBtn) {
            createPageBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openPageBuilder();
            });
        }

        const createPostBtn = document.getElementById('create-post-btn');
        if (createPostBtn) {
            createPostBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openPostEditor();
            });
        }

        // Modal controls - Fixed with proper null checks
        const closeBuilderBtn = document.getElementById('close-builder');
        if (closeBuilderBtn) {
            closeBuilderBtn.addEventListener('click', () => this.closeModal('page-builder-modal'));
        }

        const closeEditorBtn = document.getElementById('close-editor');
        if (closeEditorBtn) {
            closeEditorBtn.addEventListener('click', () => this.closeModal('post-editor-modal'));
        }

        const savePageBtn = document.getElementById('save-page');
        if (savePageBtn) {
            savePageBtn.addEventListener('click', () => this.savePage());
        }

        const publishPostBtn = document.getElementById('publish-post');
        if (publishPostBtn) {
            publishPostBtn.addEventListener('click', () => this.publishPost());
        }

        // Media upload - Fixed event listeners
        const uploadMediaBtn = document.getElementById('upload-media-btn');
        if (uploadMediaBtn) {
            uploadMediaBtn.addEventListener('click', () => this.triggerFileUpload());
        }

        const mediaUploadZone = document.getElementById('media-upload-zone');
        if (mediaUploadZone) {
            mediaUploadZone.addEventListener('click', () => this.triggerFileUpload());
        }

        const mediaFileInput = document.getElementById('media-file-input');
        if (mediaFileInput) {
            mediaFileInput.addEventListener('change', (e) => this.handleFileUpload(e));
        }

        // Search and filters - Fixed with proper null checks
        const pagesSearch = document.getElementById('pages-search');
        if (pagesSearch) {
            pagesSearch.addEventListener('input', (e) => this.filterContent('pages', e.target.value));
        }

        const postsSearch = document.getElementById('posts-search');
        if (postsSearch) {
            postsSearch.addEventListener('input', (e) => this.filterContent('posts', e.target.value));
        }

        const pagesStatusFilter = document.getElementById('pages-status-filter');
        if (pagesStatusFilter) {
            pagesStatusFilter.addEventListener('change', (e) => this.filterByStatus('pages', e.target.value));
        }

        const postsStatusFilter = document.getElementById('posts-status-filter');
        if (postsStatusFilter) {
            postsStatusFilter.addEventListener('change', (e) => this.filterByStatus('posts', e.target.value));
        }

        // Settings - Fixed event listener
        const saveSettingsBtn = document.getElementById('save-settings-btn');
        if (saveSettingsBtn) {
            saveSettingsBtn.addEventListener('click', () => this.saveSettings());
        }

        // Preview controls - Fixed event listeners
        document.querySelectorAll('.preview-device').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.changePreviewDevice(e.target.dataset.device || e.target.closest('[data-device]').dataset.device);
            });
        });

        // Page builder events
        this.setupPageBuilderEvents();
        this.setupPostEditorEvents();
        this.setupDragAndDrop();
    }

    setupPageBuilderEvents() {
        // Component categories - Using event delegation
        document.addEventListener('click', (e) => {
            const category = e.target.closest('.category');
            if (category && category.dataset.category) {
                e.preventDefault();
                this.filterComponents(category.dataset.category);
            }
        });

        // Template selector - Using event delegation
        document.addEventListener('change', (e) => {
            if (e.target.id === 'template-selector') {
                this.changeTemplate(e.target.value);
            }
        });
    }

    setupPostEditorEvents() {
        // Editor toolbar - Using event delegation
        document.addEventListener('click', (e) => {
            const toolbarBtn = e.target.closest('.toolbar-btn');
            if (toolbarBtn && toolbarBtn.dataset.command) {
                e.preventDefault();
                this.handleEditorCommand(toolbarBtn.dataset.command);
            }
        });

        // Preview toggle - Using event delegation
        document.addEventListener('click', (e) => {
            if (e.target.id === 'toggle-preview' || e.target.closest('#toggle-preview')) {
                e.preventDefault();
                this.togglePreview();
            }
        });

        // Post content changes - Using event delegation
        document.addEventListener('input', (e) => {
            if (e.target.id === 'post-content' || e.target.id === 'post-title') {
                this.updatePreview();
            }
        });
    }

    setupDragAndDrop() {
        // Component dragging
        document.addEventListener('dragstart', (e) => {
            if (e.target.classList.contains('component-item')) {
                e.dataTransfer.setData('text/plain', e.target.dataset.type);
                e.dataTransfer.effectAllowed = 'copy';
            }
        });

        // Canvas drop zone
        document.addEventListener('dragover', (e) => {
            const canvasArea = e.target.closest('#canvas-area');
            if (canvasArea) {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'copy';
                const dropZone = canvasArea.querySelector('.drop-zone');
                if (dropZone) {
                    dropZone.classList.add('drag-over');
                }
            }
        });

        document.addEventListener('dragleave', (e) => {
            const canvasArea = e.target.closest('#canvas-area');
            if (canvasArea && !canvasArea.contains(e.relatedTarget)) {
                const dropZone = canvasArea.querySelector('.drop-zone');
                if (dropZone) {
                    dropZone.classList.remove('drag-over');
                }
            }
        });

        document.addEventListener('drop', (e) => {
            const canvasArea = e.target.closest('#canvas-area');
            if (canvasArea) {
                e.preventDefault();
                const componentType = e.dataTransfer.getData('text/plain');
                this.addComponentToCanvas(componentType);
                const dropZone = canvasArea.querySelector('.drop-zone');
                if (dropZone) {
                    dropZone.classList.remove('drag-over');
                }
            }
        });

        // Media upload drag and drop
        document.addEventListener('dragover', (e) => {
            const uploadZone = e.target.closest('#media-upload-zone');
            if (uploadZone) {
                e.preventDefault();
                uploadZone.classList.add('dragover');
            }
        });

        document.addEventListener('dragleave', (e) => {
            const uploadZone = e.target.closest('#media-upload-zone');
            if (uploadZone && !uploadZone.contains(e.relatedTarget)) {
                uploadZone.classList.remove('dragover');
            }
        });

        document.addEventListener('drop', (e) => {
            const uploadZone = e.target.closest('#media-upload-zone');
            if (uploadZone) {
                e.preventDefault();
                uploadZone.classList.remove('dragover');
                this.handleFileUpload({target: {files: e.dataTransfer.files}});
            }
        });
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch(e.key) {
                    case 's':
                        e.preventDefault();
                        this.saveAll();
                        break;
                    case 'z':
                        e.preventDefault();
                        this.undo();
                        break;
                    case 'n':
                        e.preventDefault();
                        this.showCreateMenu();
                        break;
                }
            }
        });
    }

    switchSection(section) {
        // Update active menu item
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });
        const activeMenuItem = document.querySelector(`[data-section="${section}"]`);
        if (activeMenuItem) {
            activeMenuItem.classList.add('active');
        }

        // Hide all sections
        document.querySelectorAll('.cms-section').forEach(sec => {
            sec.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(section);
        if (targetSection) {
            targetSection.classList.add('active');
            this.currentSection = section;

            // Render section content
            this.renderSection(section);
        }
    }

    renderSection(section) {
        switch(section) {
            case 'dashboard':
                this.renderDashboard();
                break;
            case 'pages':
                this.renderPages();
                break;
            case 'posts':
                this.renderPosts();
                break;
            case 'media':
                this.renderMedia();
                break;
            case 'users':
                this.renderUsers();
                break;
            case 'settings':
                this.renderSettings();
                break;
            case 'preview':
                this.renderPreview();
                break;
        }
    }

    renderDashboard() {
        // Update statistics
        const pagesCount = document.getElementById('pages-count');
        const postsCount = document.getElementById('posts-count');
        const mediaCount = document.getElementById('media-count');
        const usersCount = document.getElementById('users-count');

        if (pagesCount) pagesCount.textContent = this.data.pages.length;
        if (postsCount) postsCount.textContent = this.data.posts.length;
        if (mediaCount) mediaCount.textContent = this.data.media.length;
        if (usersCount) usersCount.textContent = this.data.users.length;

        // Render recent activity
        const activityList = document.getElementById('recent-activity');
        if (activityList) {
            const activities = [
                {icon: 'fas fa-pencil-alt', title: 'New blog post created', time: '2 hours ago', type: 'post'},
                {icon: 'fas fa-file-alt', title: 'Home page updated', time: '5 hours ago', type: 'page'},
                {icon: 'fas fa-images', title: 'New media uploaded', time: '1 day ago', type: 'media'},
                {icon: 'fas fa-user-plus', title: 'New user registered', time: '2 days ago', type: 'user'}
            ];

            activityList.innerHTML = activities.map(activity => `
                <div class="activity-item">
                    <div class="activity-icon">
                        <i class="${activity.icon}"></i>
                    </div>
                    <div class="activity-content">
                        <p class="activity-title">${activity.title}</p>
                        <p class="activity-time">${activity.time}</p>
                    </div>
                </div>
            `).join('');
        }
    }

    renderPages() {
        const pagesList = document.getElementById('pages-list');
        if (pagesList) {
            pagesList.innerHTML = this.data.pages.map(page => `
                <div class="content-item" data-id="${page.id}">
                    <div class="content-info">
                        <h3 class="content-title">${page.title}</h3>
                        <div class="content-meta">
                            <span class="status status--${page.status}">${page.status}</span>
                            <span>Template: ${page.template}</span>
                            <span>Updated: ${new Date(page.updatedAt).toLocaleDateString()}</span>
                        </div>
                    </div>
                    <div class="content-actions">
                        <button class="btn btn--sm btn--outline" onclick="cms.editPage('${page.id}')">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button class="btn btn--sm btn--outline" onclick="cms.duplicatePage('${page.id}')">
                            <i class="fas fa-copy"></i> Duplicate
                        </button>
                        <button class="btn btn--sm btn--outline" onclick="cms.deletePage('${page.id}')">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }

    renderPosts() {
        const postsList = document.getElementById('posts-list');
        
        // Populate categories filter
        const categoryFilter = document.getElementById('posts-category-filter');
        if (categoryFilter) {
            categoryFilter.innerHTML = '<option value="">All Categories</option>' + 
                this.data.categories.map(cat => `<option value="${cat.name}">${cat.name}</option>`).join('');
        }

        if (postsList) {
            postsList.innerHTML = this.data.posts.map(post => `
                <div class="content-item" data-id="${post.id}">
                    <div class="content-info">
                        <h3 class="content-title">${post.title}</h3>
                        <div class="content-meta">
                            <span class="status status--${post.status}">${post.status}</span>
                            <span>Author: ${this.getUserDisplayName(post.author)}</span>
                            <span>Categories: ${post.categories ? post.categories.join(', ') : 'Uncategorized'}</span>
                            <span>Updated: ${new Date(post.updatedAt).toLocaleDateString()}</span>
                        </div>
                    </div>
                    <div class="content-actions">
                        <button class="btn btn--sm btn--outline" onclick="cms.editPost('${post.id}')">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button class="btn btn--sm btn--outline" onclick="cms.duplicatePost('${post.id}')">
                            <i class="fas fa-copy"></i> Duplicate
                        </button>
                        <button class="btn btn--sm btn--outline" onclick="cms.deletePost('${post.id}')">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }

    renderMedia() {
        const mediaGrid = document.getElementById('media-grid');
        if (mediaGrid) {
            mediaGrid.innerHTML = this.data.media.map(media => `
                <div class="media-item" data-id="${media.id}">
                    <div class="media-preview">
                        ${media.type === 'image' ? 
                            `<img src="${media.url}" alt="${media.filename}">` :
                            `<i class="fas fa-file"></i>`
                        }
                    </div>
                    <div class="media-info">
                        <p class="media-filename">${media.filename}</p>
                        <p class="media-details">${media.size} • ${new Date(media.uploadedAt).toLocaleDateString()}</p>
                    </div>
                </div>
            `).join('');
        }
    }

    renderUsers() {
        const usersList = document.getElementById('users-list');
        if (usersList) {
            usersList.innerHTML = this.data.users.map(user => `
                <div class="user-item" data-id="${user.id}">
                    <img src="${user.avatar}" alt="${user.displayName}" class="user-avatar">
                    <div class="user-details">
                        <h4>${user.displayName}</h4>
                        <p>${user.email}</p>
                        <p>Last login: ${new Date(user.lastLogin).toLocaleDateString()}</p>
                    </div>
                    <span class="user-role ${user.role}">${user.role}</span>
                    <div class="content-actions">
                        <button class="btn btn--sm btn--outline" onclick="cms.editUser('${user.id}')">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        ${user.id !== this.currentUser.id ? 
                            `<button class="btn btn--sm btn--outline" onclick="cms.deleteUser('${user.id}')">
                                <i class="fas fa-trash"></i> Delete
                            </button>` : ''
                        }
                    </div>
                </div>
            `).join('');
        }
    }

    renderSettings() {
        // Load current settings
        const siteName = document.getElementById('site-name');
        const siteTagline = document.getElementById('site-tagline');
        const siteTheme = document.getElementById('site-theme');

        if (siteName) siteName.value = this.data.settings.siteName;
        if (siteTagline) siteTagline.value = this.data.settings.tagline;
        if (siteTheme) siteTheme.value = this.data.settings.theme;
    }

    renderPreview() {
        this.generateWebsitePreview();
    }

    openPageBuilder(pageId = null) {
        const modal = document.getElementById('page-builder-modal');
        const title = document.getElementById('builder-title');
        
        if (!modal) return;

        if (pageId) {
            const page = this.data.pages.find(p => p.id === pageId);
            if (title) title.textContent = `Edit Page: ${page.title}`;
            this.loadPageInBuilder(page);
        } else {
            if (title) title.textContent = 'Create New Page';
            this.initializeNewPage();
        }

        this.renderComponents();
        modal.classList.remove('hidden');
    }

    openPostEditor(postId = null) {
        const modal = document.getElementById('post-editor-modal');
        const title = document.getElementById('editor-title');
        
        if (!modal) return;

        if (postId) {
            const post = this.data.posts.find(p => p.id === postId);
            if (title) title.textContent = `Edit Post: ${post.title}`;
            this.loadPostInEditor(post);
        } else {
            if (title) title.textContent = 'Create New Post';
            this.initializeNewPost();
        }

        this.renderPostCategories();
        modal.classList.remove('hidden');
    }

    renderComponents() {
        const componentsList = document.getElementById('components-list');
        if (componentsList) {
            const components = this.data.components;

            componentsList.innerHTML = components.map(comp => `
                <div class="component-item" draggable="true" data-type="${comp.type}">
                    <div class="component-icon">${comp.icon}</div>
                    <span class="component-name">${comp.name}</span>
                </div>
            `).join('');
        }
    }

    renderPostCategories() {
        const categoriesContainer = document.getElementById('post-categories');
        if (categoriesContainer) {
            categoriesContainer.innerHTML = this.data.categories.map(cat => `
                <div class="category-checkbox">
                    <input type="checkbox" id="cat-${cat.id}" value="${cat.name}">
                    <label for="cat-${cat.id}">${cat.name}</label>
                </div>
            `).join('');
        }
    }

    addComponentToCanvas(componentType) {
        const canvas = document.getElementById('canvas-area');
        if (!canvas) return;

        const dropZone = canvas.querySelector('.drop-zone');
        if (!dropZone) return;
        
        // Create new component
        const componentId = 'comp_' + Date.now();
        const component = this.createComponent(componentType, componentId);
        
        // Replace drop zone message if it's the first component
        if (dropZone.children.length === 1) {
            dropZone.innerHTML = '';
        }
        
        dropZone.appendChild(component);
        this.attachComponentEvents(component);
    }

    createComponent(type, id) {
        const wrapper = document.createElement('div');
        wrapper.className = 'canvas-component';
        wrapper.dataset.type = type;
        wrapper.dataset.id = id;
        
        let content = '';
        switch(type) {
            case 'header':
                content = '<h2>New Heading</h2>';
                break;
            case 'paragraph':
                content = '<p>This is a new paragraph. Click to edit.</p>';
                break;
            case 'image':
                content = '<div class="placeholder-image" style="background: #f0f0f0; height: 200px; display: flex; align-items: center; justify-content: center; border-radius: 8px;"><i class="fas fa-image" style="font-size: 2em; color: #ccc;"></i></div>';
                break;
            case 'button':
                content = '<button class="btn btn--primary">Click Me</button>';
                break;
            case 'hero':
                content = '<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 80px 20px; text-align: center; border-radius: 12px;"><h1>Hero Section</h1><p>Captivating subtitle goes here</p><button class="btn btn--secondary">Get Started</button></div>';
                break;
            case 'features':
                content = '<div style="padding: 40px 20px;"><h2 style="text-align: center; margin-bottom: 30px;">Features</h2><div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;"><div style="text-align: center; padding: 20px;"><i class="fas fa-star" style="font-size: 2em; color: #667eea; margin-bottom: 10px;"></i><h3>Feature 1</h3><p>Description of feature 1</p></div><div style="text-align: center; padding: 20px;"><i class="fas fa-heart" style="font-size: 2em; color: #667eea; margin-bottom: 10px;"></i><h3>Feature 2</h3><p>Description of feature 2</p></div><div style="text-align: center; padding: 20px;"><i class="fas fa-rocket" style="font-size: 2em; color: #667eea; margin-bottom: 10px;"></i><h3>Feature 3</h3><p>Description of feature 3</p></div></div></div>';
                break;
            default:
                content = `<div class="component-placeholder">New ${type} component</div>`;
        }
        
        wrapper.innerHTML = `
            <div class="component-controls">
                <button class="control-btn" onclick="cms.editComponent('${id}')">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="control-btn" onclick="cms.duplicateComponent('${id}')">
                    <i class="fas fa-copy"></i>
                </button>
                <button class="control-btn" onclick="cms.deleteComponent('${id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            ${content}
        `;
        
        return wrapper;
    }

    attachComponentEvents(component) {
        component.addEventListener('click', (e) => {
            e.stopPropagation();
            this.selectComponent(component);
        });
    }

    selectComponent(component) {
        // Remove previous selection
        document.querySelectorAll('.canvas-component.selected').forEach(comp => {
            comp.classList.remove('selected');
        });
        
        // Select current component
        component.classList.add('selected');
        this.selectedComponent = component;
        
        // Show properties panel
        this.showComponentProperties(component);
    }

    showComponentProperties(component) {
        const propertiesContent = document.getElementById('properties-content');
        if (!propertiesContent) return;

        const componentType = component.dataset.type;
        
        let propertiesHTML = `<h4>${componentType.charAt(0).toUpperCase() + componentType.slice(1)} Properties</h4>`;
        
        switch(componentType) {
            case 'header':
                propertiesHTML += `
                    <div class="property-group">
                        <label class="form-label">Text</label>
                        <input type="text" class="form-control" value="New Heading" onchange="cms.updateComponentProperty('text', this.value)">
                    </div>
                    <div class="property-group">
                        <label class="form-label">Tag</label>
                        <select class="form-control" onchange="cms.updateComponentProperty('tag', this.value)">
                            <option value="h1">H1</option>
                            <option value="h2" selected>H2</option>
                            <option value="h3">H3</option>
                        </select>
                    </div>
                `;
                break;
            case 'paragraph':
                propertiesHTML += `
                    <div class="property-group">
                        <label class="form-label">Text</label>
                        <textarea class="form-control" rows="4" onchange="cms.updateComponentProperty('text', this.value)">This is a new paragraph. Click to edit.</textarea>
                    </div>
                `;
                break;
            case 'button':
                propertiesHTML += `
                    <div class="property-group">
                        <label class="form-label">Button Text</label>
                        <input type="text" class="form-control" value="Click Me" onchange="cms.updateComponentProperty('text', this.value)">
                    </div>
                    <div class="property-group">
                        <label class="form-label">URL</label>
                        <input type="url" class="form-control" placeholder="https://..." onchange="cms.updateComponentProperty('url', this.value)">
                    </div>
                    <div class="property-group">
                        <label class="form-label">Style</label>
                        <select class="form-control" onchange="cms.updateComponentProperty('style', this.value)">
                            <option value="primary">Primary</option>
                            <option value="secondary">Secondary</option>
                            <option value="outline">Outline</option>
                        </select>
                    </div>
                `;
                break;
        }
        
        propertiesContent.innerHTML = propertiesHTML;
    }

    updateComponentProperty(property, value) {
        if (!this.selectedComponent) return;
        
        const componentType = this.selectedComponent.dataset.type;
        
        switch(componentType) {
            case 'header':
                if (property === 'text') {
                    const heading = this.selectedComponent.querySelector('h1, h2, h3, h4, h5, h6');
                    if (heading) heading.textContent = value;
                }
                break;
            case 'paragraph':
                if (property === 'text') {
                    const paragraph = this.selectedComponent.querySelector('p');
                    if (paragraph) paragraph.textContent = value;
                }
                break;
            case 'button':
                if (property === 'text') {
                    const button = this.selectedComponent.querySelector('button');
                    if (button) button.textContent = value;
                }
                break;
        }
    }

    handleEditorCommand(command) {
        const editor = document.getElementById('post-content');
        if (!editor) return;
        
        switch(command) {
            case 'bold':
                document.execCommand('bold', false, null);
                break;
            case 'italic':
                document.execCommand('italic', false, null);
                break;
            case 'underline':
                document.execCommand('underline', false, null);
                break;
            case 'heading':
                document.execCommand('formatBlock', false, '<h2>');
                break;
            case 'list':
                document.execCommand('insertUnorderedList', false, null);
                break;
            case 'link':
                const url = prompt('Enter URL:');
                if (url) document.execCommand('createLink', false, url);
                break;
            case 'image':
                const imgUrl = prompt('Enter image URL:');
                if (imgUrl) document.execCommand('insertImage', false, imgUrl);
                break;
        }
        
        this.updatePreview();
    }

    togglePreview() {
        const editor = document.getElementById('post-content');
        const preview = document.getElementById('post-preview');
        const toggleBtn = document.getElementById('toggle-preview');
        
        if (!editor || !preview || !toggleBtn) return;
        
        if (this.editorMode === 'edit') {
            editor.classList.add('hidden');
            preview.classList.remove('hidden');
            toggleBtn.innerHTML = '<i class="fas fa-edit"></i> Edit';
            this.editorMode = 'preview';
            this.updatePreview();
        } else {
            editor.classList.remove('hidden');
            preview.classList.add('hidden');
            toggleBtn.innerHTML = '<i class="fas fa-eye"></i> Preview';
            this.editorMode = 'edit';
        }
    }

    updatePreview() {
        const titleInput = document.getElementById('post-title');
        const contentInput = document.getElementById('post-content');
        const preview = document.getElementById('post-preview');
        
        if (!titleInput || !contentInput || !preview) return;
        
        const title = titleInput.value;
        const content = contentInput.innerHTML;
        
        preview.innerHTML = `
            <h1>${title || 'Untitled Post'}</h1>
            ${content}
        `;
    }

    generateWebsitePreview() {
        const previewFrame = document.getElementById('preview-frame');
        if (!previewFrame) return;

        const pages = this.data.pages.filter(page => page.status === 'published');
        const posts = this.data.posts.filter(post => post.status === 'published');
        
        const websiteHTML = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${this.data.settings.siteName}</title>
                <style>
                    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; line-height: 1.6; }
                    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
                    header { background: #333; color: white; padding: 1rem 0; }
                    nav ul { list-style: none; padding: 0; margin: 0; display: flex; gap: 2rem; }
                    nav a { color: white; text-decoration: none; }
                    main { padding: 2rem 0; }
                    .hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 80px 20px; text-align: center; border-radius: 12px; margin: 2rem 0; }
                    .features { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin: 3rem 0; }
                    .feature { text-align: center; padding: 2rem; background: #f8f9fa; border-radius: 8px; }
                    .posts { display: grid; gap: 1rem; margin: 2rem 0; }
                    .post { background: white; border: 1px solid #dee2e6; border-radius: 8px; padding: 1.5rem; }
                    .btn { display: inline-block; padding: 12px 24px; background: #007bff; color: white; text-decoration: none; border-radius: 6px; border: none; cursor: pointer; }
                </style>
            </head>
            <body>
                <header>
                    <div class="container">
                        <nav>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <main>
                    <div class="container">
                        <div class="hero">
                            <h1>Welcome to ${this.data.settings.siteName}</h1>
                            <p>${this.data.settings.tagline}</p>
                            <a href="#" class="btn">Get Started</a>
                        </div>
                        
                        <section class="features">
                            <div class="feature">
                                <h3>🚀 Fast Performance</h3>
                                <p>Lightning-fast loading times for optimal user experience</p>
                            </div>
                            <div class="feature">
                                <h3>📱 Responsive Design</h3>
                                <p>Perfect on all devices, from mobile to desktop</p>
                            </div>
                            <div class="feature">
                                <h3>🎨 Beautiful Design</h3>
                                <p>Professional, modern design that converts visitors</p>
                            </div>
                        </section>
                        
                        <section>
                            <h2>Latest Blog Posts</h2>
                            <div class="posts">
                                ${posts.slice(0, 3).map(post => `
                                    <article class="post">
                                        <h3>${post.title}</h3>
                                        <p>${post.excerpt}</p>
                                        <small>By ${this.getUserDisplayName(post.author)} • ${new Date(post.publishedAt).toLocaleDateString()}</small>
                                    </article>
                                `).join('')}
                            </div>
                        </section>
                    </div>
                </main>
            </body>
            </html>
        `;
        
        previewFrame.srcdoc = websiteHTML;
    }

    changePreviewDevice(device) {
        const preview = document.getElementById('website-preview');
        const buttons = document.querySelectorAll('.preview-device');
        
        if (!preview) return;
        
        buttons.forEach(btn => btn.classList.remove('active'));
        const activeButton = document.querySelector(`[data-device="${device}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
        
        preview.className = `website-preview ${device}`;
    }

    filterContent(type, searchTerm) {
        const items = document.querySelectorAll(`#${type}-list .content-item`);
        
        items.forEach(item => {
            const titleElement = item.querySelector('.content-title');
            if (titleElement) {
                const title = titleElement.textContent.toLowerCase();
                const matches = title.includes(searchTerm.toLowerCase());
                item.style.display = matches ? 'flex' : 'none';
            }
        });
    }

    filterByStatus(type, status) {
        const items = document.querySelectorAll(`#${type}-list .content-item`);
        
        items.forEach(item => {
            const statusElement = item.querySelector('.status');
            if (statusElement) {
                const itemStatus = statusElement.textContent;
                const matches = !status || itemStatus === status;
                item.style.display = matches ? 'flex' : 'none';
            }
        });
    }

    handleFileUpload(event) {
        const files = event.target.files;
        const loadingIndicator = document.getElementById('loading-indicator');
        
        if (files.length === 0) return;
        
        if (loadingIndicator) {
            loadingIndicator.classList.remove('hidden');
        }
        
        // Simulate file upload
        setTimeout(() => {
            Array.from(files).forEach(file => {
                const mediaItem = {
                    id: 'media_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
                    filename: file.name,
                    url: URL.createObjectURL(file),
                    type: file.type.startsWith('image/') ? 'image' : 'file',
                    size: this.formatFileSize(file.size),
                    uploadedAt: new Date().toISOString()
                };
                
                this.data.media.push(mediaItem);
            });
            
            this.renderMedia();
            this.showNotification('success', `${files.length} file(s) uploaded successfully`);
            
            if (loadingIndicator) {
                loadingIndicator.classList.add('hidden');
            }
        }, 1500);
    }

    triggerFileUpload() {
        const fileInput = document.getElementById('media-file-input');
        if (fileInput) {
            fileInput.click();
        }
    }

    saveAll() {
        const loadingIndicator = document.getElementById('loading-indicator');
        if (loadingIndicator) {
            loadingIndicator.classList.remove('hidden');
        }
        
        // Simulate saving
        setTimeout(() => {
            if (loadingIndicator) {
                loadingIndicator.classList.add('hidden');
            }
            this.showNotification('success', 'All changes saved successfully');
        }, 1000);
    }

    savePage() {
        // Collect page data from builder
        const title = prompt('Page Title:', 'New Page') || 'New Page';
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        
        const page = {
            id: 'page_' + Date.now(),
            title: title,
            slug: slug,
            template: document.getElementById('template-selector')?.value || 'page',
            status: 'draft',
            author: this.currentUser.id,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            components: []
        };
        
        this.data.pages.push(page);
        this.closeModal('page-builder-modal');
        this.showNotification('success', 'Page saved successfully');
        this.renderPages();
    }

    publishPost() {
        const titleInput = document.getElementById('post-title');
        const contentInput = document.getElementById('post-content');
        const statusInput = document.getElementById('post-status');
        const tagsInput = document.getElementById('post-tags');
        
        const title = titleInput?.value || 'Untitled Post';
        const content = contentInput?.innerHTML || '';
        const status = statusInput?.value || 'draft';
        const categories = Array.from(document.querySelectorAll('#post-categories input:checked')).map(cb => cb.value);
        const tags = (tagsInput?.value || '').split(',').map(tag => tag.trim()).filter(Boolean);
        
        const post = {
            id: 'post_' + Date.now(),
            title: title,
            slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            content: content,
            excerpt: content.replace(/<[^>]*>/g, '').substring(0, 160) + '...',
            author: this.currentUser.id,
            status: status,
            categories: categories,
            tags: tags,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            publishedAt: status === 'published' ? new Date().toISOString() : null
        };
        
        this.data.posts.push(post);
        this.closeModal('post-editor-modal');
        this.showNotification('success', `Post ${status === 'published' ? 'published' : 'saved'} successfully`);
        this.renderPosts();
    }

    saveSettings() {
        const siteName = document.getElementById('site-name');
        const siteTagline = document.getElementById('site-tagline');
        const siteTheme = document.getElementById('site-theme');

        if (siteName) this.data.settings.siteName = siteName.value;
        if (siteTagline) this.data.settings.tagline = siteTagline.value;
        if (siteTheme) this.data.settings.theme = siteTheme.value;
        
        this.showNotification('success', 'Settings saved successfully');
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    showCreateMenu() {
        // Enhanced create menu with proper modal or dropdown implementation
        const options = ['New Page', 'New Blog Post', 'Upload Media'];
        const choice = prompt(`Create:\n${options.map((opt, i) => `${i + 1}. ${opt}`).join('\n')}\n\nEnter choice (1-3):`);
        
        switch(choice) {
            case '1': 
                this.openPageBuilder(); 
                break;
            case '2': 
                this.openPostEditor(); 
                break;
            case '3': 
                this.triggerFileUpload(); 
                break;
            default:
                if (choice) {
                    this.showNotification('info', 'Invalid choice. Please select 1, 2, or 3.');
                }
        }
    }

    startAutoSave() {
        this.autoSaveInterval = setInterval(() => {
            const autoSaveStatus = document.querySelector('.auto-save-status');
            if (autoSaveStatus) {
                autoSaveStatus.innerHTML = '<i class="fas fa-check-circle"></i> Auto-saved';
            }
        }, 30000); // Every 30 seconds
    }

    showNotification(type, message) {
        const toast = document.getElementById('notification-toast');
        if (!toast) return;

        const icon = toast.querySelector('.toast-icon');
        const messageEl = toast.querySelector('.toast-message');
        
        if (icon) {
            icon.className = `toast-icon ${type}`;
            icon.innerHTML = type === 'success' ? '<i class="fas fa-check-circle"></i>' : 
                             type === 'error' ? '<i class="fas fa-exclamation-circle"></i>' :
                             '<i class="fas fa-info-circle"></i>';
        }
        
        if (messageEl) {
            messageEl.textContent = message;
        }
        
        toast.classList.remove('hidden');
        
        // Auto-hide after 3 seconds
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
        
        // Close button functionality
        const closeBtn = toast.querySelector('.toast-close');
        if (closeBtn) {
            closeBtn.onclick = () => {
                toast.classList.add('hidden');
            };
        }
    }

    getUserDisplayName(userId) {
        const user = this.data.users.find(u => u.id === userId);
        return user ? user.displayName : 'Unknown User';
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // CRUD Operations
    editPage(pageId) {
        this.openPageBuilder(pageId);
    }

    editPost(postId) {
        this.openPostEditor(postId);
    }

    deletePage(pageId) {
        if (confirm('Are you sure you want to delete this page?')) {
            this.data.pages = this.data.pages.filter(page => page.id !== pageId);
            this.renderPages();
            this.showNotification('success', 'Page deleted successfully');
        }
    }

    deletePost(postId) {
        if (confirm('Are you sure you want to delete this post?')) {
            this.data.posts = this.data.posts.filter(post => post.id !== postId);
            this.renderPosts();
            this.showNotification('success', 'Post deleted successfully');
        }
    }

    duplicatePage(pageId) {
        const originalPage = this.data.pages.find(page => page.id === pageId);
        if (!originalPage) return;

        const duplicatedPage = {
            ...originalPage,
            id: 'page_' + Date.now(),
            title: originalPage.title + ' (Copy)',
            slug: originalPage.slug + '-copy',
            status: 'draft',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        this.data.pages.push(duplicatedPage);
        this.renderPages();
        this.showNotification('success', 'Page duplicated successfully');
    }

    duplicatePost(postId) {
        const originalPost = this.data.posts.find(post => post.id === postId);
        if (!originalPost) return;

        const duplicatedPost = {
            ...originalPost,
            id: 'post_' + Date.now(),
            title: originalPost.title + ' (Copy)',
            slug: originalPost.slug + '-copy',
            status: 'draft',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            publishedAt: null
        };
        
        this.data.posts.push(duplicatedPost);
        this.renderPosts();
        this.showNotification('success', 'Post duplicated successfully');
    }

    // Component operations
    editComponent(componentId) {
        this.showNotification('info', 'Component editing feature would open a detailed editor');
    }

    duplicateComponent(componentId) {
        this.showNotification('info', 'Component duplicated');
    }

    deleteComponent(componentId) {
        const component = document.querySelector(`[data-id="${componentId}"]`);
        if (component && confirm('Delete this component?')) {
            component.remove();
            this.showNotification('success', 'Component deleted');
        }
    }

    filterComponents(category) {
        const components = document.querySelectorAll('.component-item');
        const categories = document.querySelectorAll('.category');
        
        // Update active category
        categories.forEach(cat => cat.classList.remove('active'));
        const activeCategory = document.querySelector(`[data-category="${category}"]`);
        if (activeCategory) {
            activeCategory.classList.add('active');
        }
        
        // Filter components
        components.forEach(comp => {
            const compCategory = this.data.components.find(c => c.type === comp.dataset.type)?.category;
            const shouldShow = category === 'all' || compCategory === category;
            comp.style.display = shouldShow ? 'flex' : 'none';
        });
    }

    changeTemplate(templateId) {
        // Template change logic
        this.showNotification('info', `Template changed to: ${templateId}`);
    }

    undo() {
        this.showNotification('info', 'Undo functionality would restore previous state');
    }

    // Placeholder methods for future implementation
    initializeNewPage() {
        const canvasArea = document.getElementById('canvas-area');
        if (canvasArea) {
            canvasArea.innerHTML = '<div class="drop-zone"><p>Drag components here to build your page</p></div>';
        }
    }

    initializeNewPost() {
        const postTitle = document.getElementById('post-title');
        const postContent = document.getElementById('post-content');
        const postStatus = document.getElementById('post-status');

        if (postTitle) postTitle.value = '';
        if (postContent) postContent.innerHTML = '';
        if (postStatus) postStatus.value = 'draft';
        this.updatePreview();
    }

    loadPageInBuilder(page) {
        // Load existing page data into builder
        this.initializeNewPage();
    }

    loadPostInEditor(post) {
        const postTitle = document.getElementById('post-title');
        const postContent = document.getElementById('post-content');
        const postStatus = document.getElementById('post-status');
        const postTags = document.getElementById('post-tags');

        if (postTitle) postTitle.value = post.title;
        if (postContent) postContent.innerHTML = post.content;
        if (postStatus) postStatus.value = post.status;
        if (postTags) postTags.value = post.tags ? post.tags.join(', ') : '';
        
        // Check categories
        if (post.categories) {
            post.categories.forEach(cat => {
                const checkbox = document.querySelector(`input[value="${cat}"]`);
                if (checkbox) checkbox.checked = true;
            });
        }
        
        this.updatePreview();
    }

    editUser(userId) {
        this.showNotification('info', 'User editing feature would open user management form');
    }

    deleteUser(userId) {
        if (confirm('Are you sure you want to delete this user?')) {
            this.data.users = this.data.users.filter(user => user.id !== userId);
            this.renderUsers();
            this.showNotification('success', 'User deleted successfully');
        }
    }
}

// Initialize the CMS application
const cms = new CMSApplication();

// Make CMS globally available for inline onclick handlers
window.cms = cms;