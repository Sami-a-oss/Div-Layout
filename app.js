document.addEventListener('DOMContentLoaded', function () {
  const layoutButtons = document.querySelectorAll('.layout-btn')

  layoutButtons.forEach((button) => {
    button.addEventListener('click', function () {
      layoutButtons.forEach((btn) => btn.classList.remove('active'))
      this.classList.add('active')
      document.querySelectorAll('.layout-container').forEach((layout) => {
        layout.classList.add('hidden')
      })
      const layoutToShow = this.getAttribute('data-layout')
      document
        .getElementById(`${layoutToShow}-layout`)
        .classList.remove('hidden')
    })
  })
})
