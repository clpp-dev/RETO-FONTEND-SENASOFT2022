const data = {
  logo: {
    imgLogo: "./img/logoSena.png",
  },
  banner: {
    linkURL:
      "https://images.pexels.com/photos/1181275/pexels-photo-1181275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img: "./img/BannerHero.jpg",
  },
  nosotros: {
    title: "Nosotros",
    linkUrl: "https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img: "./img/imgNosotros.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.",
  },
  contacto: {
    title: "Contacto",
  }
};

const logo = document.getElementById('imgLogo')
const imgBannerHero = document.getElementById('imgHero')
const imgNosotros = document.getElementById('imgNosotros')
const textNosotros = document.getElementById('textNosotros')
const imgFooter = document.getElementById('imgFooter')

logo.src = data.logo.imgLogo
imgBannerHero.src = data.banner.img
imgNosotros.src = data.nosotros.img
textNosotros.innerText = data.nosotros.description
imgFooter.src = data.logo.imgLogo











