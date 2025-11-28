"use client";export default function Impressum() {
    return (
        <div className="w-full flex justify-center bg-[#F4F4F4] px-6 py-20">
            <div className="max-w-[1272px] w-full flex flex-col gap-[90px]">
                
                {/* Main Title */}
                <h1 
                    className="text-[#132219] font-[600] mt-[20px] leading-[75px]" 
                    style={{ fontSize: "62px", fontFamily: "SF Pro Display" }}
                >
                    Impressum
                </h1>

                {/* Kontaktadresse */}
                <div className="flex flex-col gap-[24px]">
                    <h2 
                        className="text-[#132219] font-[600] leading-[50px]"
                        style={{ fontSize: "40px", fontFamily: "SF Pro Display" }}
                    >
                        Kontaktadresse
                    </h2>

                    <p className="text-[#132219] leading-[32px]" style={{ fontSize: "20px", fontFamily: "SF Pro Display" }}>
                        HYPOTEQ AG, Landvogt Waser-Str. 658405 Winterthur<br />
                        Schweiz, info@hypoteq.ch, 044 564 73 70, UID: CHE-249.716.201
                    </p>
                </div>

                {/* Vertretungsberechtigte Personen */}
                <div className="flex flex-col gap-[24px]">
                    <h2 
                        className="text-[#132219] font-[600] leading-[50px]"
                        style={{ fontSize: "40px", fontFamily: "SF Pro Display" }}
                    >
                        Vertretungsberechtigte Personen
                    </h2>

                    <p className="text-[#132219] leading-[32px]" style={{ fontSize: "20px", fontFamily: "SF Pro Display" }}>
                       Marko Circelli, Davide Iuorno, Fisnik Salihu
                    </p>
                </div>

                {/* Haftungsausschluss */}
                <div className="flex flex-col gap-[24px]">
                    <h2 
                        className="text-[#132219] font-[600] leading-[50px]"
                        style={{ fontSize: "40px", fontFamily: "SF Pro Display" }}
                    >
                        Haftungsausschluss
                    </h2>

                    <p className="text-[#132219] leading-[32px] whitespace-pre-line" style={{ fontSize: "20px", fontFamily: "SF Pro Display" }}>
Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und
Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche
aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch
technische Störungen entstanden sind, werden ausgeschlossen. Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich
vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die
Veröffentlichung zeitweise oder endgültig einzustellen.
                    </p>
                </div>

                {/* Haftung für Links */}
                <div className="flex flex-col gap-[24px]">
                    <h2 
                        className="text-[#132219] font-[600] leading-[50px]"
                        style={{ fontSize: "40px", fontFamily: "SF Pro Display" }}
                    >
                        Haftung für Links
                    </h2>

                    <p className="text-[#132219] leading-[32px]" style={{ fontSize: "20px", fontFamily: "SF Pro Display" }}>
                        Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche
                        Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf 
                        eigene Gefahr des Nutzers oder der Nutzerin.
                    </p>
                </div>

                {/* Urheberrechte */}
                <div className="flex flex-col gap-[24px]">
                    <h2 
                        className="text-[#132219] font-[600] leading-[50px]"
                        style={{ fontSize: "40px", fontFamily: "SF Pro Display" }}
                    >
                        Urheberrechte
                    </h2>

                    <p className="text-[#132219] leading-[32px] whitespace-pre-line" style={{ fontSize: "20px", fontFamily: "SF Pro Display" }}>
Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich der
Firma HYPOTEQ AG oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung
der Urheberrechtsträger im Voraus einzuholen.
                    </p>
                </div>
{/* DATENSCHUTZERKLÄRUNG */}
<div className="flex flex-col gap-[90px]">
    
    <h1 
        className="text-[#132219] font-[600] leading-[60px]"
        style={{ fontSize: "56px", fontFamily: "SF Pro Display" }}
    >
        Datenschutzerklärung
    </h1>

    {/* 1 */}
    <div className="flex flex-col gap-[24px]">
        <h2 
            className="text-[#132219] font-[600] leading-[40px]"
            style={{ fontSize: "32px", fontFamily: "SF Pro Display" }}
        >
            1. Erhebung, Verarbeitung und Nutzung personenbezogener Daten
        </h2>

        <p 
            className="text-[#132219] leading-[32px]"
            style={{ fontSize: "20px", fontFamily: "SF Pro Display" }}
        >
            Bei einem Besuch dieser Website erheben wir keine personenbezogenen Daten von Ihnen. 
            Personenbezogene Daten werden nur erhoben, wenn Sie uns diese selbst über unser Kontakt- oder 
            Anfrageformular mitteilen. Diese Daten werden ausschliesslich zur Beantwortung Ihres Anliegens genutzt.
        </p>
    </div>

    {/* 2 */}
    <div className="flex flex-col gap-[24px]">
        <h2 
            className="text-[#132219] font-[600] leading-[40px]"
            style={{ fontSize: "32px", fontFamily: "SF Pro Display" }}
        >
            2. Verwendung von eigenen Cookies
        </h2>

        <p 
            className="text-[#132219] leading-[32px]"
            style={{ fontSize: "20px", fontFamily: "SF Pro Display" }}
        >
            Beim Aufruf bestimmter Seiten wird ein sogenanntes «Session-Cookie» gesetzt. 
            Hierbei handelt es sich um eine kleine Textdatei, die nach Ende der Browser-Sitzung 
            automatisch wieder von Ihrem Computer gelöscht wird. Diese Datei dient ausschliesslich dazu, 
            bestimmte Applikationen nutzen zu können. Sie können bei den meisten Webbrowsern die Einstellungen 
            so ändern, dass Ihr Browser neue Cookies nicht akzeptiert oder Sie können erhaltene Cookies löschen lassen. 
            Wie dies konkret für Ihren Browser funktioniert, kann in der Regel über dessen Hilfe-Funktion in Erfahrung gebracht werden.
        </p>
    </div>

    {/* 3 */}
    <div className="flex flex-col gap-[24px]">
        <h2 
            className="text-[#132219] font-[600] leading-[40px]"
            style={{ fontSize: "32px", fontFamily: "SF Pro Display" }}
        >
            3. Server-Log-Dateien
        </h2>

        <p 
            className="text-[#132219] leading-[32px] whitespace-pre-line"
            style={{ fontSize: "20px", fontFamily: "SF Pro Display" }}
        >
Wie bei jeder Verbindung mit einem Webserver protokolliert und speichert der Server unseres 
Webhosting-Anbieters Metanet in Zürich, Schweiz, bestimmte technische Daten. Zu diesen Daten gehören 
die IP-Adresse und das Betriebssystem Ihres Geräts, die Daten, die Zugriffszeit, die Art des Browsers 
sowie die Browser-Anfrage inklusive der Herkunft der Anfrage (Referrer). Dies ist aus technischen Gründen 
erforderlich, um Ihnen unsere Website zur Verfügung zu stellen. Der Webhosting-Anbieter schützt diese Daten 
mit technischen und organisatorischen Massnahmen vor unbefugten Zugriffen und gibt sie nicht an Dritte weiter.

Soweit wir dabei personenbezogene Daten verarbeiten, tun wir dies aufgrund unseres berechtigten Interesses, 
Ihnen die bestmögliche Nutzererfahrung zu bieten und die Sicherheit und Stabilität unserer Systeme zu gewährleisten.
        </p>
    </div>

    {/* 4 */}
    <div className="flex flex-col gap-[24px]">
        <h2 
            className="text-[#132219] font-[600] leading-[40px]"
            style={{ fontSize: "32px", fontFamily: "SF Pro Display" }}
        >
            4. Google Analytics
        </h2>

        <p 
            className="text-[#132219] leading-[32px] whitespace-pre-line"
            style={{ fontSize: "20px", fontFamily: "SF Pro Display" }}
        >
Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Inc., 
1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Google Analytics verwendet sog. «Cookies», 
d.h. Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen.

Google nutzt diese Informationen, um im Auftrag des Betreibers dieser Website Ihre Nutzung der Website auszuwerten, 
um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung 
verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics 
von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.

Durch eine entsprechende Einstellung in Ihrem Browser können Sie die Speicherung der Cookies verhindern oder wieder löschen.
        </p>
    </div>

    {/* 5 */}
    <div className="flex flex-col gap-[24px]">
        <h2 
            className="text-[#132219] font-[600] leading-[40px]"
            style={{ fontSize: "32px", fontFamily: "SF Pro Display" }}
        >
            5. Ihre Rechte
        </h2>

        <p 
            className="text-[#132219] leading-[32px] whitespace-pre-line"
            style={{ fontSize: "20px", fontFamily: "SF Pro Display" }}
        >
Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, 
Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten 
gegen das Datenschutzrecht verstösst oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt wurden, 
können Sie sich bei der Aufsichtsbehörde beschweren.
        </p>
    </div>

</div>

            </div>
            
        </div>
    );
}
