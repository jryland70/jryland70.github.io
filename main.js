
    var navbar = document.getElementById("navbar");
    var offsetTop = navbar.offsetTop;

    window.onscroll = function (e) {
      var pageYOffset = window.pageYOffset;
      if (pageYOffset >= 58) {
        navbar.classList.add('fix-navbar');
      } else {
        navbar.classList.remove('fix-navbar');
      }
    };
    function toggleExpand(elem) {
      var elems = document.getElementsByClassName('expand')
      if (elems.length > 0) {
        // Sanity check to loop over everything and remove all expansions.        
        console.log('this shouldnt happen');
        var modal = document.getElementById('modal');
        removeExpands(modal);
        // End Sanity
      } else {
        elem.classList.add('expand');
        elem.parentElement.classList.add('expand-z-index');
        var modal = document.getElementById('modal');
        modal.classList.add('show')
      }
    }
    function removeExpands(elem) {
      console.log('removeexpands');
      var elems = document.getElementsByClassName('expand')
      if (elems.length > 0) {
        for (let e of elems) {
          e.classList.remove('expand');
          e.parentElement.classList.remove('expand-z-index');
        };
      }
      elem.classList.remove('show');
    }


/* ---- animations ---- */
if (typeof sr == 'undefined') {
  window.sr = ScrollReveal({
      duration: 1600,
      delay: 50
  });
}

function triggerReveals() {
  sr.reveal('.bottomReveal', {
      origin: 'bottom'
  }).reveal('.leftReveal', {
      origin: 'left'
  }).reveal('.rightReveal', {
      origin: 'right'
  }).reveal('.topReveal', {
      origin: 'top'
  });

  sr.reveal('.rotateBottomReveal', {
      origin: 'bottom',
      rotate: { x: 90 }
  }).reveal('.rotateLeftReveal', {
      origin: 'left',
      rotate: { x: 90 }
  }).reveal('.rotateRightReveal', {
      origin: 'right',
      rotate: { x: 90 }
  }).reveal('.rotateTopReveal', {
      origin: 'top',
      rotate: { x: 90 }
  })

  sr.reveal('.scaleReveal', {
      origin: 'top',
      scale: 0.6
  });
}

triggerReveals()

window.onload = function () {
  var ml = new MiniLightbox(".enableLightBox");
  
};
