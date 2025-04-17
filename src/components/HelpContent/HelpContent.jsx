import React from 'react'
import "./HelpContent.css"
import HelpAccordion from '../HelpAccordion/HelpAccordion'

const contentData = {
    '/home': [
        { title: 'Hesabımın Şifresini Unuttum', content: 'Şifre sıfırlama işlemi için e-posta adresinizi girin.' },
        { title: 'Hesabıma Banka Hesabı Nasıl Eklerim?', content: 'Hesap ayarlarından banka hesabı ekleyebilirsiniz.' },
        { title: 'Cüzdanı Kullanmak İçin Üyelik Gerekli Mi?', content: 'Evet, cüzdanınızı kullanabilmek için sitemize üye olmanız gerekmektedir.' },
        { title: 'Hesabımı Devredebilir Miyim?', content: 'Hayır, hesaplar kişisel olup başkasına devredilemez.' },
        { title: 'Hesap Hareketlerimi Nasıl Görebilirim?', content: 'Hesap hareketlerinizi Hesap Geçmişi sekmesinden inceleyebilirsiniz..' },
        { title: 'Cüzdanımın Bakiyesi Sıfırın Altında Düşebilir Mi?', content: 'Hayır, cüzdanınızda negatif bakiye oluşmaz.' },
        { title: 'Hesap Oluştrmak İçin Ne Yapmalıyım?', content: 'Sitemize üye olmak için ad, soyad, e-posta ve şifre bilgilerinizi girerek kolayca hesap oluşturabilirsiniz.' },
        { title: 'Cüzdan Bakiyemin Süresi Var Mı?', content: 'Hayır, cüzdan bakiyeniz süresiz olarak hesabınızda kalır. Ancak promosyon bakiyeleri belirli bir süre içinde kullanılmalıdır.' },
    ],
    'pay-tab': [
        { title: 'Ödemeleri Nasıl Alırım?', content: 'Ödemeler otomatik olarak hesabınıza aktarılacaktır.' },
        { title: 'Ödeme Geçmişimi Nasıl Görebilirim?', content: 'Ödeme geçmişinizi hesap ayarlarından görüntüleyebilirsiniz.' },
    ],
    'security-tab': [
        { title: 'Hesabımın Güvenliğini Nasıl Arttırırım?', content: 'İki faktörlü kimlik doğrulamayı etkinleştirin.' },
        { title: 'Şüpheli Bir Giriş Fark Ettim, Ne Yapmalıyım?', content: 'Hemen şifrenizi değiştirin ve destek ekibiyle iletişime geçin..' },
    ],
    'pay-method-tab': [
        { title: 'Kredi Kartı ile Ödeme Yapabilir Miyim?', content: 'Evet, kredi kartı ile ödeme yapabilirsiniz.?' },
        { title: 'Havale / EFT ile Ödeme Yapabilir Miyim?', content: 'Evet, banka havalesi ile ödeme yapabilirsiniz.' },
    ]
}

function HelpContent({ activeKey }) {
    const currentContent = contentData[activeKey]

    if (!currentContent) {
        return <div>İçerik bulunamadı.</div>
    }

    return <HelpAccordion items={currentContent} />
}

export default HelpContent
