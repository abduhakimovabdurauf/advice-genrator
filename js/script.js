async function getAdvice() {
    try {
      document.getElementById('loader').style.display = 'block';
      document.getElementById('advice-text').textContent = '';
      
      const response = await fetch('https://api.adviceslip.com/advice');
      if (!response.ok) {
        throw new Error('Tarmoq xatosi');
      }
      
      const data = await response.json();
      const adviceNumber = data.slip.id;
      const adviceText = data.slip.advice;

      document.getElementById('advice-id').textContent = `#${adviceNumber}`;
      document.getElementById('advice-text').textContent = `"${adviceText}"`;
    } catch (error) {
      console.log('Maslahat olishda xatolik yuz berdi:', error);
      document.getElementById('advice-text').textContent = 'Maslahat olishda xato yuz berdi. Iltimos, qayta urinib ko\'ring.';
    } finally {
      document.getElementById('loader').style.display = 'none';
    }
  }
  