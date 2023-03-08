let surahC = document.querySelector('.card-ayah');
let surahNum = localStorage.getItem('number');
let surahTxt = '';

let apiUrlar = 'http://api.alquran.cloud/v1/surah/' + surahNum;

fetch(apiUrlar)
    .then(res => {
        return res.json();
    }).then(data => {

        console.log(data.data.name);

        let surahCen = document.querySelector('.card-ayah');
        let surahNumen = localStorage.getItem('number');
        let surahTxten = '';

        let apiUrlen = 'http://api.alquran.cloud/v1/surah/' + surahNumen + '/en.asad';
        fetch(apiUrlen)
            .then(res => {
                return res.json();
            }).then(daten => {


                surahTxten +=
                    `

                <div class="surah-name">
                <p class="ar-name">سورة :</p>
                <p class="en-name">${data.data.name} - ${daten.data.englishName}</p>
                </div>



                `;
                console.log(daten.data.englishName);
                for (let i = 0; i < daten.data.ayahs.length; i++) {
                    surahTxten +=
                        `
                        <div class="card-body">
                        <p class="ar-ayah">${data.data.ayahs[i].text} (${data.data.ayahs[i].numberInSurah}).</p>
                        <p class="en-ayah">${daten.data.ayahs[i].text} (${daten.data.ayahs[i].numberInSurah}).</p>
                        </div>
                        `
                    surahCen.innerHTML = surahTxten;
                }


            })
    })

