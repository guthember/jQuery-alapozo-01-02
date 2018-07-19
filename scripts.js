$(function () {
  // html elemek összegyűjtése
  let $button = $('button#random-color');
  console.log($button);

  $button.click( function() {
    // színek keverése
    const max = 255;
    let red = Math.round(Math.random() * max );
    let green = Math.round(Math.random() * max );
    let blue = Math.round(Math.random() * max );
    console.log('red:',red);
    console.log('green:',green);
    console.log('blue:',blue);


    // szín beállítása
    $button.css( 'background-color' , 'rgb(' + red + ',' + green + ',' + blue + ')' );

    // font szín beállítása
    let avg = ( red + green + blue ) / 3;
    console.log('avg:', avg / 255);

    if (avg / 255 < 0.5) {
      $button.css( 'color' , 'white' );
    } else {
      $button.css('color' , 'black');
    }
  });

});
