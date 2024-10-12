let id_location_index = {
    '1': information_id1,
    '2': information_id2,
    '3': information_id3,
    '4': information_id4,
    '5': information_id5,
    '6': information_id6,
    '7': information_id7,
    '8': information_id8
}

load_details(id_location_index[sessionStorage.getItem('page_id')]);

function load_details(details) {
    let page_title = document.getElementById("page_title");
    page_title.innerHTML = details[0];

    for(let i=1; i < details.length; i++) {
        let card_container = document.createElement('div')
        card_container.className = 'infoBox';

        let text_container = document.createElement('div');
        text_container.className = 'text';

        let title = document.createElement('div');
        title.className = 'title';
        title.innerHTML = details[i]['title'];

        let content = document.createElement('div');
        content.className = i%2 == 0 ? 'content-even' : 'content-odd';
        content.innerHTML = details[i]['content'];

        let pic_container = document.createElement('div');
        pic_container.className = 'pic';

        let img = document.createElement('img');
        img.className = 'img';
        img.src = details[i]['image'];

        let showBtn = document.createElement('a');
        showBtn.className = 'showBtn';
        showBtn.innerHTML = "View on Map";
        showBtn.onclick = function() {
            open(`../map/index.html?location_name=${details[i]['title']}&lat=${details[i]['latitude']}&long=${details[i]['longitude']}&from=info`, "_self");
        };

        text_container.appendChild(title);
        text_container.appendChild(content);

        pic_container.appendChild(img);
        pic_container.appendChild(showBtn);

        if(i % 2 == 0) {
            card_container.appendChild(pic_container);
            card_container.appendChild(text_container);
        } else {
            card_container.appendChild(text_container);
            card_container.appendChild(pic_container);
        }

        document.getElementById("page").appendChild(card_container);
    }
}
