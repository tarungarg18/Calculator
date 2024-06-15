let calculation=localStorage.getItem('Calculation')||'';
      document.querySelector('.js-calculation')
          .innerHTML=calculation;
      function update_calculation(value){
        calculation+=value;
        localStorage.setItem('Calculation',calculation)
        document.querySelector('.js-calculation')
          .innerHTML=calculation;
      }