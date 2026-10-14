<!--
    KIRI wordmark, redrawn from the original logo in a 127-unit cap height.
    Every shape is stroked in its own colour with round joins, which softens all corners equally.
    The K's floating leg is the accent; it is the same K as /public/favicon.svg.
    Letters are grouped (.logo-letter, .logo-leg) so pages can animate them individually.
-->
<template>
    <svg viewBox="-3.79 -3.79 484.58 134.58" role="img" aria-label="Kiri">
        <g fill="currentColor" stroke="currentColor" stroke-width="7.57" stroke-linejoin="round">
            <!-- K -->
            <g class="logo-letter">
                <polygon points="0,0 22,0 22,127 0,127" />
                <polygon points="83,0 110,0 22,96.7 22,63.3" />
            </g>
            <polygon class="logo-leg text-main-red" points="73.19,78.49 112,127 86,127 58.19,93.49" />

            <!-- I -->
            <rect class="logo-letter" x="181" y="0" width="22" height="127" />

            <!-- R: bowl hung from two bars (no upper stem), stem below, leg off the middle bar -->
            <g class="logo-letter">
                <rect x="275" y="0" width="57" height="19.5" />
                <rect x="275" y="62.5" width="57" height="19.5" />
                <path d="M332 0A46 41 0 0 1 332 82V62.5A23 21.5 0 0 0 332 19.5Z" />
                <rect x="275" y="82" width="22" height="45" />
                <polygon points="317.2,70 340.9,70 382.2,127 357.1,127" />
            </g>

            <!-- I -->
            <rect class="logo-letter" x="455" y="0" width="22" height="127" />
        </g>
    </svg>
</template>
