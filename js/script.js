let conB = document.querySelector('#cont');
let fCard = '';

fetch('http://api.alquran.cloud/v1/surah')
    .then(res => {
        return res.json();
    }).then(data => {
        for (i = 0; i < data.data.length; i++) {

            fCard +=
                `
                <div class="card">
                    <div class="card-body">
                        <button id="btn" class="title" value="${data.data[i].number}">${data.data[i].name}</button>
                    </div>
                </div>

            `;

            conB.innerHTML = fCard;
        }

        let btnSurah = document.querySelectorAll('#btn');

        btnSurah.forEach(surahid => {
            surahid.addEventListener('click', function () {
                console.log(this.value);

                localStorage.setItem('number', this.value)

                window.location.href = 'surah.html';

            }) // End click
        }) // End loop


    })