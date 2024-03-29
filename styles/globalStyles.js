import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: 'Pyidaungsu';
	src: url('/fonts/Pyidaungsu.eot');
	src: local('/fonts/Pyidaungsu'),
		url('/fonts/Pyidaungsu.eot?#iefix') format('embedded-opentype'),
		url('/fonts/Pyidaungsu.woff2') format('woff2'),
		url('/fonts/Pyidaungsu.woff') format('woff'),
		url('/fonts/Pyidaungsu.ttf') format('truetype'),
		url('/fonts/Pyidaungsu.svg#Pyidaungsu') format('svg');
	font-weight: normal;
	font-style: normal;
	font-display: swap;
}

/* Disable Selector */
body {
	background: #fff;
	overflow: auto;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}


h1,
h2,
h3,
h4,
h5,
h6,
div,
p {
	font-family: Pyidaungsu !important;
}

.MuiTypography-h1 {
	font-family: Pyidaungsu !important;
}

.MuiTypography-h2 {
	font-family: Pyidaungsu !important;
}

.MuiTypography-h3 {
	font-family: Pyidaungsu !important;
}

.MuiTypography-h4 {
	font-family: Pyidaungsu !important;
}

.MuiTypography-h5 {
	font-family: Pyidaungsu !important;
}

.MuiTypography-h6 {
	font-family: Pyidaungsu !important;
}

img {
	width: 100%;
}

`
export default GlobalStyle
