function openModal() {
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.innerHTML = `
        <div style="background: white; padding: 20px; border-radius: 5px; text-align: center;">
            <h2>Fenetre modale</h2>
            <p>elle est chargée dynamiquement et ensuite on lexecute!</p>
            <button id="closeModalBtn">fermer</button>
        </div>
    `;
  document.body.appendChild(modal);
  const closeModalBtn = document.getElementById('closeModalBtn');
  closeModalBtn.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
}
export { openModal };
