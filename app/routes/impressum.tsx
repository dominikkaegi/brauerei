import globalStyles from "~/styles/style.css";

export const links = () => {
  return [{ rel: "stylesheet", href: globalStyles }];
};

export default function Index() {
  return (
    <>
      <Impressum />
      <DatenSchutz />
    </>
  );
}

const Impressum = () => {
  return (
    <section>
      <div className="container py-2">
        <h2>Impressum</h2>
        <div>Kägi Bräu Gmbh</div>
        <div>Fabrikstrasse 26</div>
        <div>8854 Siebnen</div>
        <div>info@kägibräu.ch</div>
      </div>
    </section>
  )
}

const DatenSchutz = () => {
  return (
    <section>
      <div className="container">
        <h2>Datenschutzerklärung</h2>
        <p>Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO),
          ist:</p>
        <br />
        <p>Christoph Kägi<br />8854 Siebnen</p>
        <p>E-Mail: info@kaegibraeu.ch<br />WebSite: http://www.kägibräu.ch/ </p>
        <p>&nbsp;</p>
        <h2>Allgemeiner Hinweis</h2>
        <p>
          Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des
          Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer
          persönlichen Daten. Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
          Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften
          sowie dieser Datenschutzerklärung.
        </p>
        <p>In Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor
          fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu schützen.</p>
        <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
          Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
          nicht möglich.</p>
        <p>Durch die Nutzung dieser WebSite erklären Sie sich mit der Erhebung, Verarbeitung und Nutzung von Daten
          gemäss der nachfolgenden Beschreibung einverstanden. Diese WebSite kann grundsätzlich ohne Registrierung
          besucht werden. Dabei werden Daten wie beispielsweise aufgerufene Seiten bzw. Namen der abgerufenen Datei, Datum
          und Uhrzeit zu statistischen Zwecken auf dem Server gespeichert, ohne dass diese Daten unmittelbar auf Ihre Person
          bezogen werden. Personenbezogene Daten, insbesondere Name, Adresse oder E-Mail-Adresse werden soweit möglich
          auf freiwilliger Basis erhoben. Ohne Ihre Einwilligung erfolgt keine Weitergabe der Daten an Dritte.</p>
        <p>&nbsp;</p>
        <h2>Datenübertragungssicherheit (ohne SSL)</h2>
        <p>Bitte beachten Sie, dass Daten, die über ein offenes Netz wie das Internet oder einen E-Mail-Dienst ohne
          SSL-Verschlüsselung übermittelt werden, für jedermann einsehbar sind. Eine unverschlüsselte
          Verbindung erkennen Sie daran, dass die Adresszeile des Browsers "http://" anzeigt und kein
          Schloss-Symbol in Ihrer Browserzeile angezeigt wird. Informationen die über das Internet übertragen
          werden und online empfangene Inhalte, können unter Umständen über Netze von Drittanbietern
          übermittelt werden. Wir können die Vertraulichkeit von Mitteilungen oder Unterlagen, die über
          solche offenen Netze oder Netze von Drittanbietern übermittelt werden, nicht garantieren.</p>
        <p>Wenn Sie über ein offenes Netz oder Netze von Drittanbietern personenbezogene Informationen bekannt geben,
          sollten Sie sich der Tatsache bewusst sein, dass Ihre Daten verloren gehen oder Dritte potenziell auf diese
          Informationen zugreifen und folglich die Daten ohne Ihre Zustimmung sammeln und nutzen können. Zwar werden in
          vielen Fällen die einzelnen Datenpakete verschlüsselt übermittelt, nicht aber die Namen des
          Absenders und des Empfängers. Selbst wenn der Absender und der Empfänger im gleichen Land wohnen,
          erfolgt die Datenübermittlung über solche Netze häufig und ohne Kontrollen auch über
          Drittstaaten, d.h. auch über Länder, die nicht das gleiche Datenschutzniveau bieten wie Ihr Domizilland.
          Wir übernehmen für die Sicherheit Ihrer Daten während der Übermittlung über das Internet
          keine Verantwortung und lehnen jede Haftung für mittelbare und unmittelbare Verluste ab. Wir bitten Sie,
          andere Kommunikationsmittel zu benutzen, sollten Sie dies aus Gründen der Sicherheit für notwendig oder
          vernünftig erachten.</p>
        <p>Trotz umfangreicher technischer und organisatorischer Sicherungsvorkehrungen, können möglicherweise
          Daten verloren gehen oder von Unbefugten abgefangen und/oder manipuliert werden. Wir treffen soweit möglich
          geeignete technische und organisatorische Sicherheitsmassnahmen, um dies innerhalb unseres Systems zu verhindern.
          Ihr Computer befindet sich indessen ausserhalb des von uns kontrollierbaren Sicherheitsbereichs. Es obliegt Ihnen
          als Benutzer, sich über die erforderlichen Sicherheitsvorkehrungen zu informieren und diesbezüglich
          geeignete Massnahmen zu treffen. Als Website-Betreiber haften wir keinesfalls für Schäden, die Ihnen aus
          Datenverlust oder -manipulation entstehen können.</p>
        <p>Daten welche Sie in Online-Formularen angeben, können zwecks Auftragsabwicklung an beauftragte Dritte
          weitergegeben und von diesen eingesehen und allenfalls bearbeitet werden.</p>
        <p>&nbsp;</p>
        <h2>Datenschutzerklärung für Recht auf Auskunft, Löschung, Sperrung</h2>
        <p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten,
          deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung
          oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie
          sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <h2>Änderungen</h2>
        <p>Wir können diese Datenschutzerklärung jederzeit ohne Vorankündigung anpassen. Es gilt die jeweils
          aktuelle, auf unserer Website publizierte Fassung. Soweit die Datenschutzerklärung Teil einer Vereinbarung
          mit Ihnen ist, werden wir Sie im Falle einer Aktualisierung über die Änderung per E-Mail oder auf andere
          geeignete Weise informieren.</p>
        <p>&nbsp;</p>
        <h2>Fragen an den Datenschutzbeauftragten</h2>
        <p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die
          für den Datenschutz zu Beginn der Datenschutzerklärung aufgeführten, verantwortlichen Person in
          unserer Organisation.</p>
        <p>&nbsp;</p>
        <p>
          Siebnen, 06.02.2019
          <br />Quelle:
          <a href="https://www.swissanwalt.ch" target="_blank" rel="noopener" style={{color: 'inherit'}} >Datenschutz-Generator
            von SwissAnwalt</a>
        </p>
      </div>
    </section>
  )
}
