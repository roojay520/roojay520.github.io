const searchFunc = function (path, search_id, content_id) {


    $.ajax({
        url: path,
        dataType: 'json',
        type: 'GET',
        success(xmlResponse) {
            // get the contents from search data
            // var datas = $( "entry", xmlResponse ).map(function() {
            //     return {
            //         title: $( "title", this ).text(),
            //         content: $("content",this).text(),
            //         url: $( "url" , this).text()
            //     };
            // }).get();
            const datas = xmlResponse.map(obj => obj);
            const $input = document.getElementById(search_id);
            const $resultContent = document.getElementById(content_id);
            $input.addEventListener('input', function () {
                let str = '<ul class="search-result-list">';
                const keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
                $resultContent.innerHTML = '';
                if (this.value.trim().length <= 0) {
                    return;
                }
                // perform local searching
                datas.forEach((data) => {
                    let isMatch = true;
                    const content_index = [];
                    const data_title = data.title.trim().toLowerCase();
                    const data_content = data.content.trim().replace(/<[^>]+>/g, '').toLowerCase();
                    const data_url = data.url;
                    let index_title = -1;
                    let index_content = -1;
                    let first_occur = -1;
                    // only match artiles with not empty titles and contents
                    if (data_title != '' && data_content != '') {
                        keywords.forEach((keyword, i) => {
                            index_title = data_title.indexOf(keyword);
                            index_content = data_content.indexOf(keyword);
                            if (index_title < 0 && index_content < 0) {
                                isMatch = false;
                            } else {
                                if (index_content < 0) {
                                    index_content = 0;
                                }
                                if (i == 0) {
                                    first_occur = index_content;
                                }
                            }
                        });
                    }
                    // show search results
                    if (isMatch) {
                        str += `<li><a href='${data_url}' class='search-result-title'>${data_title}</a>`;
                        const content = data.content.trim().replace(/<[^>]+>/g, '');
                        if (first_occur >= 0) {
                            // cut out 100 characters
                            let start = first_occur - 30;
                            let outLength = 78;
                            if (start < 0) {
                                start = 0;
                            }
                            if (start + outLength > content.length) {
                                if (content.length < outLength) {
                                    outLength = content.length - start;
                                } else {
                                    start = content.length - outLength;
                                }
                            }
                            let match_content = content.substr(start, outLength);
                            // highlight all keywords
                            keywords.forEach((keyword) => {
                                const regS = new RegExp(keyword, 'gi');
                                match_content = match_content.replace(regS, `<em class="search-keyword">${keyword}</em>`);
                            });

                            str += `<p class="search-result">${match_content}...</p>`;
                        }
                        str += '</li>';
                    }
                });
                str += '</ul>';
                $resultContent.innerHTML = str;
            });
        }
    });
};
