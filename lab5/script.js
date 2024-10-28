const directionSelect = document.getElementById('direction');
const justifySelect = document.getElementById('justify');
const alignSelect = document.getElementById('align');
const flexContainer = document.querySelector('.flex-container');

function updateFlexbox() {
    flexContainer.style.flexDirection = directionSelect.value;
    flexContainer.style.justifyContent = justifySelect.value;
    flexContainer.style.alignItems = alignSelect.value;
}

directionSelect.addEventListener('change', updateFlexbox);
justifySelect.addEventListener('change', updateFlexbox);
alignSelect.addEventListener('change', updateFlexbox);
