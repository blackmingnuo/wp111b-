let main = document.querySelector('#main')

let pages = {
    '#home':`
     <h1>首頁</h1>
     <p>本網頁可以按功能表去切換畫面</p> 
    `,
    '#login':`
     <h1>輸入張號密碼<h1>
     <input type="text" placeholder="帳號"/><br/>
     <input type="password" placeholder="密碼"/><br/>
     `,

    '#logout':` 
     <hi>確定要登出?<h1>
     <button>確定
     <button>取消
     `,

    '#signup':`
     <h1>註冊</h1>
     <input type="text" placeholder="姓名"/><br/>
     <input type="email" placeholder="email"/><br/>
     <input type="text" placeholder="帳號"/><br/>
     <input type="password" placeholder="密碼"/><br/>
     `,

}

window.onhashchange = function () {
    let hash = window.location.hash
    main.innerHTML = pages[hash]
}



function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
      var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
}

