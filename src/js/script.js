function sendMail() {
    Email.send({
        SecureToken: "cf0fbe3f-878c-4b90-829d-33d08020eb35",
        To: 'widdedcmp@gmail.com',
        From: "harunrewy@gmail.com",
        Subject: document.getElementById("subject").value,
        Body: `
            <div>
                <center>
                    <h1 style="display: inline-block; background-color: #1f2235; color: #fff; font-size: 2rem; padding: .6rem 2rem; border-radius: 8px">Yeni bir mesaj geldi!</h1>
                </center>    
                <br>
                <div style="background-color: #1f2235; padding: 4rem; border-radius: 12px;">
                    <h3 style="color: #e8da1c;">Mesaj gönderen kullanıcının bilgileri:</h3>
                    <p style="font-weight: 600; font-size: 18px; color: #7a85d6;">İsim: <span style="color: #fff;">${document.getElementById("name").value}</span></p>
                    <p style="font-weight: 600; font-size: 18px; color: #7a85d6;">E-Posta: <span style="color: #fff; text-decoration: none;">${document.getElementById("mail").value}</span></p>
                    <p style="font-weight: 600; font-size: 18px; color: #7a85d6;">Konu: <span style="color: #fff;">${document.getElementById("subject").value}</span></p>
                    <p style="font-weight: 600; font-size: 18px; color: #7a85d6;">Mesaj: <span style="color: #fff;">${document.getElementById("message").value}</span></p>
                </div>
            </div>
            `
    }).then(
        message => swal({
            title: "Successful!",
            text: "Your message has reached me. I will reply as soon as possible.",
            icon: "success",
            button: "Close",
        })
    );
}