<template>
    <nav 
        class="admin-nav" 
        :class="navtype">
        <a href="/">
            <button class="admin-home-icon">Home</button>
        </a>
        <div class="admin-nav-title">
            <h3>Admin Area</h3>
        </div>
        <div class="admin-menu">
            <a href="/admin/events/finalize">
                <button 
                    :class="{active: active == 'approve'}" 
                    class="admin-menu__item">
                    <div 
                        v-if="user.needsApproval" 
                        class="admin-menu__notification">
                        <p>
                            {{ user.needsApproval }}
                        </p>
                    </div>
                    Approve Events
                </button>
            </a>

            <a href="/admin/organizers/finalize">
                <button 
                    :class="{active: active == 'orgApprove'}" 
                    class="admin-menu__item">
                    <div 
                        v-if="user.needsOrgApproval" 
                        class="admin-menu__notification">
                        <p>
                            {{ user.needsOrgApproval }}
                        </p>
                    </div>
                    Approve Organizers
                </button>
            </a>
            <a 
                v-if="admin" 
                href="/admin/events">
                <button 
                    :class="{active: active == 'events'}" 
                    class="admin-menu__item">
                    Edit Events
                </button>
            </a>
            
            <a 
                v-if="admin" 
                href="/admin/boneyard">
                <button 
                    :class="{active: active == 'boneyard'}" 
                    class="admin-menu__item">
                    Boneyard
                </button>
            </a>

            <a 
                v-if="admin" 
                href="/admin/events/purgatory">
                <button 
                    :class="{active: active == 'purgatory'}" 
                    class="admin-menu__item">
                    Purgatory
                </button>
            </a>

            <a 
                v-if="admin" 
                href="/admin/users">
                <button 
                    :class="{active: active == 'users'}" 
                    class="admin-menu__item">
                    Edit Users
                </button>
            </a>

            <a href="/admin/organizer">
                <button 
                    :class="{active: active == 'organizers'}" 
                    class="admin-menu__item">
                    Edit Organizers
                </button>
            </a>

            <a 
                v-if="admin" 
                href="/categories/create">
                <button 
                    :class="{active: active == 'categories'}" 
                    class="admin-menu__item">
                    Categories
                </button>
            </a>
            
            <a 
                v-if="admin" 
                href="/genres/create">
                <button 
                    :class="{active: active == 'tags'}" 
                    class="admin-menu__item">
                    Tags
                </button>
            </a>

            <div 
                v-if="admin"
                class="admin-top-menu">
                <button 
                    @click="advisories = !advisories" 
                    class="admin-menu__item">
                    Advisories
                </button>
                <div class="menu__sub-menu--arrow">
                    &#9660;
                </div>
            </div>

            <div 
                v-if="advisories" 
                class="admin-submenu">
                <a href="/contactlevels/create">
                    <button 
                        :class="{active: active == 'contact'}" 
                        class="admin-menu__item">
                        Contact Levels
                    </button>
                </a>

                <a href="/remotelocations/create">
                    <button 
                        :class="{active: active == 'remote'}" 
                        class="admin-menu__item">
                        Remote Locations
                    </button>
                </a>

                <a href="/contentadvisories/create">
                    <button 
                        :class="{active: active == 'content'}" 
                        class="admin-menu__item">
                        Content Advisories
                    </button>
                </a>

                <a href="/mobilities/create">
                    <button 
                        :class="{active: active == 'mobilities'}" 
                        class="admin-menu__item">
                        Mobility Advisories
                    </button>
                </a>

                <a href="/interactivelevels/create">
                    <button 
                        :class="{active: active == 'interactive'}" 
                        class="admin-menu__item">
                        Interactive Levels
                    </button>
                </a>
            </div>

            <a href="/reviewevents/create">
                <button 
                    :class="{active: active == 'reviews'}" 
                    class="admin-menu__item">
                    Event Reviews
                </button>
            </a>

            <a href="/staffpicks/create">
                <button 
                    :class="{active: active == 'picks'}" 
                    class="admin-menu__item">
                    Picks Of The Week
                </button>
            </a>
        </div>
    </nav>
</template>

<script>

    export default {

        props: ['loaduser', 'navtype'],

        data() {
            return {
                user: this.loaduser ? this.loaduser : '',
                admin: this.loaduser.type == 'a' ? true : false,
                mod: this.loaduser.type == 'm' ? true : false,
                active: '',
                advisories: false,
            };
        },

        methods: {
            onLoad() {
                let path = new URL(window.location.href).pathname;
                path == '/categories/create' ? this.active = 'categories' : '';
                path == '/genres/create' ? this.active = 'tags' : '';
                path == '/contactlevels/create' ? this.active = 'contact' : '';
                path == '/remotelocations/create' ? this.active = 'remote' : '';
                path == '/contentadvisories/create' ? this.active = 'content' : '';
                path == '/mobilities/create' ? this.active = 'mobilities' : '';
                path == '/interactivelevels/create' ? this.active = 'interactive' : '';
                path == '/admin/users' ? this.active = 'users' : '';
                path == '/admin/events' ? this.active = 'events' : '';
                path == '/admin/boneyard' ? this.active = 'boneyard' : '';
                path == '/admin/events/purgatory' ? this.active = 'purgatory' : '';
                path == '/admin/organizer' ? this.active = 'organizers' : '';
                path == '/reviewevents/create' ? this.active = 'reviews' : '';
                path == '/staffpicks/create' ? this.active = 'picks' : '';
                path == '/admin/organizers/finalize' ? this.active = 'orgApprove' : '';
                path == '/admin/events/finalize' ? this.active = 'approve' : '';

                if (this.active == 'contact' || this.active == 'remote' || this.active == 'mobilities' || this.active == 'interactive' || this.active == 'interactive') {
                    this.advisories = true;
                }
            }
        },

        mounted() {
            this.onLoad();
        },  
    }
</script>



