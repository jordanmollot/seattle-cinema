<template>
    <div>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-warning p-4">
                <NuxtLink to="/home" class="navbar-brand">The Seattle Cinema</NuxtLink>
                <button
                    class="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <NuxtLink to="/home" class="nav-link active" aria-current="page">Home</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/about" class="nav-link">About</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/showtimes" class="nav-link">Showtimes</NuxtLink>
                        </li>                        
                        <li class="nav-item">
                            <NuxtLink to="/rental" class="nav-link">Rental</NuxtLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <slot />
        <footer class="p-4 bg-warning">The Seattle Cinema, copyright 2024</footer>
    </div>
</template>