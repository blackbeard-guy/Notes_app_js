const notesListEl = document.querySelector('.notes')
const createBtn = document.querySelector('.add-btn')

createBtn.addEventListener('click', (e) => {
    const el = createNote('Title', 'Your note')
    notesListEl.appendChild(el)
})

function createNote(title, text){
    const noteEl = document.createElement('div')
    noteEl.classList.add('note')
    noteEl.innerHTML = `
    <div class="note-header">
        <p class="note-name hidden">${title}</p>
        <input class="note-name-input input" value='${title}'></input>
        <div class="btns">
            <button class="hidden edit-btn note-btn"><i class="fa-sharp fa-solid fa-pen"></i></button>
            <button class="save-btn note-btn"><i class="fa-solid fa-floppy-disk"></i></button>
            <button class="delete-btn note-btn"><i class="fa-solid fa-trash"></i></button>
        </div>
        </div>
    <div class="note-list">
        <p class="note-text hidden">${text}</p>
        <textarea class="note-text-input input">${text}</textarea>
    </div>
    `
    const editBtn = noteEl.querySelector('.edit-btn')
    const deleteBtn = noteEl.querySelector('.delete-btn')
    const saveBtn = noteEl.querySelector('.save-btn')

    deleteBtn.addEventListener('click', (e) => {
        noteEl.remove()
    })

    const noteNameEl = noteEl.querySelector('.note-name')
    const noteTextEl = noteEl.querySelector('.note-text')
    const noteNameInputEl = noteEl.querySelector('.note-name-input')
    const noteTextInputEl = noteEl.querySelector('.note-text-input')

    editBtn.addEventListener('click', (e) => {
        noteNameEl.classList.toggle('hidden')
        noteTextEl.classList.toggle('hidden')
        noteNameInputEl.classList.toggle('hidden')
        noteTextInputEl.classList.toggle('hidden')
        editBtn.classList.toggle('hidden')
        saveBtn.classList.toggle('hidden')
    })

    saveBtn.addEventListener('click', (e) => {
        noteNameEl.classList.toggle('hidden')
        noteTextEl.classList.toggle('hidden')
        noteNameInputEl.classList.toggle('hidden')
        noteTextInputEl.classList.toggle('hidden')
        editBtn.classList.toggle('hidden')
        saveBtn.classList.toggle('hidden')

        noteNameEl.innerText = noteNameInputEl.value
        noteTextEl.innerText = noteTextInputEl.value
    })

    return noteEl
}
