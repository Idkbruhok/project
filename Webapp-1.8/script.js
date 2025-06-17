// Sample question data structure
const questionData = [
    {
        id: 1,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Основе',
        tags: ['C', 'Програмирање'],
        question: 'Заокружите број испред кључне речи којом се при кодирању у програмском језику Ц, у наредби вишеструког гранања обележавају вредности за које се улази у поједине гране:',
        options: [
            'switch',
            'break',
            'return',
            'case'
        ],
        correctAnswer: 3,
        points: 1
    },
    {
        id: 2,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Основе',
        tags: ['C', 'Програмирање', 'Datoteke'],
        question: 'У програмском језику Ц декларисане су променљивe и дат је део кода програма:<br><pre><code><span class="code-keyword">FILE</span> *fp;<br><span class="code-keyword">char</span> str[150];<br>fgets(str, 80, fp);</code></pre><br>Одредити шта је последица извршавања датог кода. Заокружити број испред очекиваног одговора:',
        options: [
            'Учитава 80 карактера из датотеке и смешta у стринг str.',
            'Учитава максимално 150 карактера из датотеке и смешta у стринг str.',
            'Учитава стринг из датотеке све док се не учита знак за нови ред или 80 карактера',
            'Учитава стринг из датотеке све док се не учита знак за нови ред или 150 карактера'
        ],
        correctAnswer: 2,
        points: 1
    },
    {
        id: 3,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        tags: ['C', 'Програмирање', 'I/O'],
        question: 'У програму написаном у програмском језику Ц декларисана је променљива <span class="code-bold">pod</span> типа <span class="code-bold">int</span>. Употребом функције <span class="code-bold">fprintf(...)</span> уписати декларисан податак у <span class="code-bold">стандардну излазну датотеку</span>.\nЗаокружите број испред исправно написане наредбе:',
        options: [
            '<span class="code-bold">fprintf(pod);</span>',
            '<span class="code-bold">fprintf("<span class="code-format-specifier">%d</span>", pod);</span>',
            '<span class="code-bold">fprintf("<span class="code-format-specifier">%d</span>", pod, stdin);</span>',
            '<span class="code-bold">fprintf(stdout, "<span class="code-format-specifier">%d</span>", pod);</span>',
        ],
        correctAnswer: 3,
        points: 1
    },
    {
        id: 4,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Структуре',
        tags: ['C', 'Програмирање', 'Структуре'],
        question: 'У програмском језику Ц декларисани су структурни типови података Tacka3D (који дефинише тачку у простору) и Lopta (одређена центром и полупречником):\n<div class="code-blocks-container">\n  <div class="code-block">\n    <pre><code><span class="code-bold code-keyword">typedef struct</span>\n{\n  <span class="code-keyword">float</span> x, y, z;\n}<span class="code-bold">Tacka3D;</span></code></pre>\n  </div>\n  <div class="code-block">\n    <pre><code><span class="code-bold code-keyword">typedef struct</span>\n{\n  Tacka3D centar;\n  <span class="code-keyword">float</span> R;\n}<span class="code-bold">Lopta;</span></code></pre>\n  </div>\n</div>\nЗаокружите број испред исправно написане наредбе декларације и иницијализације променљиве x типа Lopta, тако да јој центар буде у тачки O(2,2,2), а полупречник 10цм:',
        options: [
            'Lopta x={10, {2, 2, 2}};',
            'Lopta x={2, 2, 2, 10};',
            'Lopta x={2, 2, 2}, {10};',
            'Lopta x={{2, 2, 2}, 10};'
        ],
        correctAnswer: 3,
        points: 1
    },
    {
        id: 5,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Бинарне датотеке',
        tags: ['C', 'Програмирање', 'Бинарне датотеке'],
        question: 'У програму написаном у програмском језику Ц декларисана је променљива fp која представља показивач на бинарну датотеку и променљива podatak у коју ће се уписати прочитани подаци из дефинисане бинарне датотеке. Заокружити редни број испред наредбе која омогућава учитавање три бајта са тренутне позиције из бинарне датотеке:',
        options: [
            'fread(&podatak, 24, 1, fp);',
            'fread(&podatak, 24, 0, fp);',
            'fread(&podatak, 3, 1, fp);',
            'fscanf(&podatak, 3, 1, fp);',
            'fscanf(fp, 3, %podatak);'
        ],
        correctAnswer: 2,
        points: 1
    },
    {
        id: 6,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Бинарне датотеке',
        tags: ['C', 'Програмирање', 'Бинарне датотеке'],
        question: 'У програму написаном у програмском језику Ц декларисана је променљива fp која представља показивач на бинарну датотеку и променљива podatak чија вредност ће се уписати у дефинисану бинарну датотеку. Заокружити редни број испред наредбе која омогућава упис три бајта у бинарну датотеку:',
        options: [
            'fprintf(&podatak, 3, 1, fp);',
            'fprintf(fp, 3, &podatak);',
            'fwrite(podatak, 24, 1, fp);',
            'fwrite(&podatak, 24, 0, fp);',
            'fwrite(&podatak, 3, 1, fp);'
        ],
        correctAnswer: 4,
        points: 1
    },
    {
        id: 7,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Форматирани излаз',
        tags: ['C', 'Програмирање', 'Форматирани излаз'],
        question: 'У програмском језику Ц дата је наредба декларације, а затим и наредба форматираног излаза:' +
            '<div class="question-code"><span class="code-keyword">float</span> x = 5.56;<br>printf(<span class="code-string">" x = <span=\'code-format-specifier\'>%f</span> x = <span=\'code-format-specifier\'>%g</span>\\n"</span>, x, x);</div>' +
            'Након извршења ових наредби на екрану ће се приказати вредности променљивих у задатом формату.<br><br>Заокружити број испред тачног одговора:',
        options: [
            'x = 5.560000e+000 x= 0',
            'x = 5.560000 x = 5.560000e+000',
            'x = 5.560000 x = 5.56',
            'x = 5.56 x = 5.560000e+000'
        ],
        correctAnswer: 2,
        points: 2
    },
    {
        id: 8,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Оператори',
        tags: ['C', 'Програмирање', 'Оператори'],
        question: `У програмском језику Ц декларисана је целобројна променљива и додељена јој је вредност логичког израза:<br><div class="question-code"><span class="code-keyword">int</span> x;<br>x = 1==10>5;</div>Имајући у виду приоритет оператора, одредити вредност променљиве х после извршења ове наредбе.<br><br>Заокружити број испред траженог одговора:`,
        options: [
            'променљива добија вредност логичке неистине, тј. x = 0',
            'променљива добија вредност логичке истине, тј. x = 1',
            'вредност логичког израза се не може доделити целобројној променљивој',
            'променљива добија вредност логичке истине, тј. било који број различит од 0'
        ],
        correctAnswer: 1,
        points: 2
    },
    {
        id: 9,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Оператори',
        tags: ['C', 'Програмирање', 'Оператори'],
        question: 'У програмском језику Ц декларисане су две целобројне променљиве. Променљива а добија вредност уносом са тастатуре. Затим се вредност логичког израза додељује променљивој х:' +
            '<div class="question-code"><span class="code-keyword">int</span> x, a;<br>scanf(<span class="code-string">"%d"</span>, &a);<br>x = 10!=5 || a<2;</div>' +
            'Имајући у виду приоритет оператора, одредити вредност променљиве х после извршења ове наредбе.<br><br>Заокружити број испред траженог одговора:',
        options: [
            'уколико се заградама не одредити редослед извршавања операција у овом изразу, долази до грешке, тј. "пуцања" програма',
            'без обзира на вредност која се унесе у променљиву а, вредност израза је увек "тачно", тј. x = 1',
            'без обзира на вредност која се унесе у променљиву а, вредност израза је увек "нетачно", тј. x = 0',
            'вредност израза зависи од променљиве а и не може се једнозначно одредити уколико није позната вредност уписана у променљиву а'
        ],
        correctAnswer: 1,
        points: 2
    },
    {
        id: 10,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Условни оператори',
        tags: ['C', 'Програмирање', 'Условни оператори'],
        question: 'Наредбом у Ц језику треба проверити да ли је број паран или непаран. Проценити која од датих наредби врши ову проверку и заокружити број испред тачно написане наредбе.',
        options: [
            '(broj % 2 == 1) ? printf(<span class="code-string">"PARAN!!"</span>) : printf(<span class="code-string">"NEPARAN!!"</span>);',
            '(broj % 2) ? printf(<span class="code-string">"PARAN!!"</span>) : printf(<span class="code-string">"NEPARAN!!"</span>);',
            '(broj % 2 == 0) ? printf(<span class="code-string">"PARAN!!"</span>) : printf(<span class="code-string">"NEPARAN!!"</span>);',
            '(broj & 1) ? printf(<span class="code-string">"PARAN!!"</span>) : printf(<span class="code-string">"NEPARAN!!"</span>);',
            '(broj & 0x1 == 0) ? printf(<span class="code-string">"PARAN!!"</span>) : printf(<span class="code-string">"NEPARAN!!"</span>);',
            '(broj & 1 == 1) ? printf(<span class="code-string">"PARAN!!"</span>) : printf(<span class="code-string">"NEPARAN!!"</span>);'
        ],
        correctAnswer: 2,
        points: 2
    },
    {
        id: 11,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Условни оператори',
        tags: ['C', 'Програмирање', 'Условни оператори'],
        question: `Код дат у тексту задатка треба реализовати помоћу једне <span class="code-keyword">if</span> наредбе. Заокружити број испред понуђенoг тачног одговора:<br><div class="question-code"><span class="code-keyword">if</span>(x&gt;1)<br>{<br>&nbsp;&nbsp;<span class="code-keyword">if</span>(x&lt;6)<br>&nbsp;&nbsp;&nbsp;&nbsp;y=4;<br>}<br></div>`,
        options: [
            '<span class="code-keyword">if</span>(x&gt;1 &amp;&amp; x&lt;6 ) y=4;',
            '<span class="code-keyword">if</span>(x&gt;1 || x&lt;6 ) y=4;',
            '<span class="code-keyword">if</span>(x&lt;1 || x&gt;6 ) y=4;',
            '<span class="code-keyword">if</span>(!(x&lt;=1 || x&gt;=6)) y=4;'
        ],
        correctAnswer: 0,
        points: 2
    },
    {
        id: 12,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Петље',
        tags: ['C', 'Програмирање', 'Петље', 'Условне наредбе'],
        question: `Дат је део кода на програмском језику Ц:<br><div class="question-code"><span class="code-keyword">for</span>(j=0; j&lt;n; j++)<br>&nbsp;&nbsp;<span class="code-keyword">if</span>(a[j]&gt;0)s+=a[j];<br>&nbsp;&nbsp;<span class="code-keyword">else</span> <span class="code-keyword">break</span>;<br></div><br>Свака <span class="code-keyword">for</span> петља може се написати коришћењем <span class="code-keyword">while</span> и <span class="code-keyword">do</span>-<span class="code-keyword">while</span> наредбе. Заокружити број испред понуђеног кода који је еквивлентан коду датом у тексту задатка:`,
        options: [
            'j=0;<br><span class="code-keyword">while</span>(j&lt;n &amp;&amp; a[j]>0) s+=a[j++];',
            'j=0;<br><span class="code-keyword">while</span>(j&lt;n &amp;&amp; a[j++]>0) s+=a[j];',
            'j=0;<br><span class="code-keyword">while</span>(j&lt;n || a[j]>0) s+=a[j++];',
            'j=0;<br><span class="code-keyword">while</span>(j&lt;n &amp;&amp; a[j]<=0) s+=a[j++];'
        ],
        correctAnswer: 0,
        points: 2
    },
    {
        id: 13,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Петље',
        tags: ['C', 'Програмирање', 'Петље', 'Грешке'],
        question: `Датa је декларација променљивих <span class="code-keyword">unsigned</span> a, b и део кода у програмском језику Ц.<br>Одредити шта се налази као резултат у променљивој x и y након извршења датог кода.<br>Заокружити број испред траженог одговора:<br><div class="question-code"><span class="code-keyword">unsigned</span> a, b, x, y, temp;<br>x=a*b;<br><span class="code-keyword">while</span>(b) temp=a%b, a=b, b=temp;<br>y=b;<br>x/=y;<br></div>`,
        options: [
            'x је производ а и б, а y је количник а са б',
            'x је најмањи заједнички садржалац за а и б, а y највећи заједнички делилац за а и б',
            'x је највећи заједнички делилац за а и б, а y најмањи заједнички садржалац за а и б',
            'без обзира на вредности променљивих, долази до грешке у последњој наредби кода',
            'долази до грешке јер петља понавља само прву наредбу услед изостанка<br>витичастих заграда на телу петље'
        ],
        correctAnswer: 4,
        points: 2
    },
    {
        id: 14,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Бинарни оператори',
        tags: ['C', 'Програмирање', 'Бинарни оператори', 'Петље', 'Условне наредбе'],
        question: `Датa је декларација променљивих pod, br и део кода у програмском језику Ц:<br><br><div class="question-code"><span class="code-keyword">unsigned</span> pod, br;<br>pod=128;<br>br=0;<br><span class="code-keyword">while</span>(pod!=0){<br>&nbsp;&nbsp;<span class="code-keyword">if</span>(pod &amp; 0x1) br++;<br>&nbsp;&nbsp;pod&gt;&gt;=0x1;<br>}<br></div><br>Закључити шта представља вредност коју променљива br добије извршењем кода.<br>Заокружити број испред траженог одговора:`,
        options: [
            'Број јединица у бинарном запису броја pod',
            'Број нула у бинарном запису броја pod',
            'Број цифара у бинарном запису броја pod',
            'Број цифара у хексадецималном запису броја pod'
        ],
        correctAnswer: 0,
        points: 2
    },
    {
        id: 15,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Петље',
        tags: ['C', 'Програмирање', 'Петље', 'Условне наредбе', 'Унос'],
        question: `Дат је део кода на програмском језику Ц, који контролише унос целобројне променљиве n. Одредити вредности које променљива n може добити. Заокружити број испред траженог одговора:<br><div class="question-code"><span class="code-keyword">do</span>{<br>&nbsp;&nbsp;<span class="code-keyword">printf</span>(<span class="code-string">"Unesite N:\\\\nN = "</span>);<br>&nbsp;&nbsp;<span class="code-keyword">scanf</span>(<span class="code-string">"%d"</span>,&amp;n);<br>&nbsp;&nbsp;<span class="code-keyword">if</span>(n &amp; 1) <span class="code-keyword">printf</span>(<span class="code-string">"Greska.\\\\n"</span>);<br>}<span class="code-keyword">while</span>(n &amp; 1);<br></div>`,
        options: [
            'Омогућава унос непарног природног броја',
            'Омогућава унос само позитивног природног броја',
            'Омогућава унос само негативног природног броја',
            'Омогућава унос парног природног броја',
            'Омогућава унос само непарног позитивног природног броја'
        ],
        correctAnswer: 3,
        points: 2
    },
    {
        id: 16,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Петље',
        tags: ['C', 'Програмирање', 'Петље', 'Низови'],
        question: 'Дата је декларација променљивих и део програмског кода:<br><br><div class="question-code"><span class="code-keyword">int</span> i, temp, n = 11;<br><span class="code-keyword">int</span> x[30]={ -3, -1, -2, -2, 1, 4, 3, 1, 5, -8, 5};<br>temp=x[0];<br>i=0;<br><span class="code-keyword">while</span>(i&lt;n-1) x[i++]=x[i+1];<br>x[n-1]=temp;<br></div><br>Просудити на основу наредби које ће бити извршене у <span class="code-keyword">while</span> циклусу како ће изгледати<br>трансформисан низ x од n елемената. Заокружити број испред очекиваног одговора:',
        options: [
            'x[ ] ={ 5, -3, -1, -2, -2, 1, 4, 3, 1, 5, -8 }',
            'x[ ] ={ -1, -2, -2, 1, 4, 3, 1, 5, -8, 5, -3 }',
            'x[ ] ={ -2, 0, -1, -1, 2, 5, 4, 2, 6, -7, 6 }',
            'x[ ] ={ -1, -2, -2, 1, 4, 3, 1, 5, -8, 5 }'
        ],
        correctAnswer: 1,
        points: 2
    },
    {
        id: 17,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Функције',
        tags: ['C', 'Програмирање', 'Функције'],
        question: 'У програмском језику Ц је дата декларација променљивих, а касније у коду извршен<br>позив функције на следећи начин:<br><div class="question-code"><span class="code-keyword">int</span> k, i;<br><span class="code-keyword">char</span> lista[10][50], ime[50];<br><span class="code-keyword">if</span>( Formiraj(lista[i], ime, k) == NULL) { ... }<br></div><br>На основу позива, проценити каквог је облика прототип функције и заокружити број<br>испред тачно написаног прототипа:',
        options: [
            '<span class="code-keyword">void</span> *Formiraj(<span class="code-keyword">char</span> s1, <span class="code-keyword">char</span> s2, <span class="code-keyword">int</span> x);',
            '<span class="code-keyword">char</span> Formiraj(<span class="code-keyword">char</span> *s1, <span class="code-keyword">char</span> *s2, <span class="code-keyword">int</span> x);',
            '<span class="code-keyword">int</span> *Formiraj(<span class="code-keyword">char</span> s1[], <span class="code-keyword">char</span> s2[], <span class="code-keyword">int</span> x);',
            '<span class="code-keyword">int</span> Formiraj(<span class="code-keyword">char</span> s1[], <span class="code-keyword">char</span> s2[], <span class="code-keyword">int</span> x);',
            '<span class="code-keyword">char</span> *Formiraj(<span class="code-keyword">char</span> s1, <span class="code-keyword">char</span> s2, <span class="code-keyword">int</span> x);'
        ],
        correctAnswer: 2,
        points: 2
    },
    {
        id: 18,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Функције',
        tags: ['C', 'Програмирање', 'Функције'],
        question: 'У програмском језику Ц је дата декларација променљивих, а касније у коду извршен<br>позив функције на следећи начин:<br><div class="question-code"><span class="code-keyword">int</span> x, y, i, j;<br><span class="code-keyword">float</span> **mat, *vek, z;<br>mat[i] = Formiraj(x, 0.5);<br></div><br>На основу позива, проценити каквог је облика прототип функције и заокружити број<br>испред тачно написаног прототипа:',
        options: [
            '<span class="code-keyword">float</span> Formiraj(<span class="code-keyword">int</span> n, <span class="code-keyword">float</span> m);',
            '<span class="code-keyword">void</span> *Formiraj(<span class="code-keyword">int</span> n, <span class="code-keyword">int</span> m);',
            '<span class="code-keyword">float</span> *Formiraj(<span class="code-keyword">float</span> n, <span class="code-keyword">int</span> m);',
            '<span class="code-keyword">float</span> *Formiraj(<span class="code-keyword">int</span> n, <span class="code-keyword">float</span> m);',
            '<span class="code-keyword">float</span> **Formiraj(<span class="code-keyword">int</span> n, <span class="code-keyword">float</span> m);'
        ],
        correctAnswer: 3,
        points: 2
    },
    {
        id: 19,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Функције',
        tags: ['C', 'Програмирање', 'Функције', 'Рекурзија'],
        question: 'Дат је код рекурзивне функције написан у програмском језику Ц:<br><br><div class="question-code"><span class="code-keyword">void</span> prikaz(<span class="code-keyword">int</span> k, <span class="code-keyword">int</span> n){<br><span class="code-keyword">printf</span>("<span class="code-string">%d\\t</span>",k);<br><span class="code-keyword">if</span>(k&lt;n) prikaz(k+1,n);<br><span class="code-keyword">printf</span>("<span class="code-string">%d\\t</span>",k);<br>}<br></div><br>Проценити шта ће се десити ако се функција позове наредбом: prikaz(4,10);<br>Заокружити број испред тачног одговора:\'',
        options: [
            '4 5 6 7 8 9 10',
            '4 5 6 7 8 9 10 9 8 7 6 5 4',
            '4 5 6 7 8 9 10 10 9 8 7 6 5 4',
            '10 9 8 7 6 5 4'
        ],
        correctAnswer: 2,
        points: 2
    },
    {
        id: 20,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Функције',
        tags: ['C', 'Програмирање', 'Функције'],
        question: 'У програмском језику Ц дат је прототип функције funkcija() и декларисане су<br>променљиве у функцији main(). У понуђеним одговорима дати су позиви функције за<br>декларисане променљиве.<br><div class="question-code"><span class="code-keyword">void</span> funkcija(<span class="code-keyword">int</span> *x, <span class="code-keyword">int</span> *y, <span class="code-keyword">int</span> **p);<br><span class="code-keyword">void</span> main(){<br><span class="code-keyword">int</span> a=5, b=7, c=15, *poc;<br>poc = &c;<br>}<br></div><br>Заокружити редни број испред исправно записаног позива декларисане функције:',
        options: [
            'funkcija(a, b, &poc);',
            'funkcija(&a, &b, &poc);',
            'funkcija(&a, &b, poc);',
            'c = funkcija(&a, &b, &poc);'
        ],
        correctAnswer: 1,
        points: 2
    },
    {
        id: 21,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Структуре',
        tags: ['C', 'Програмирање', 'Структуре', 'Показивачи'],
        question: 'У програмском језику C декларисани су структурни типoви података Tacka (одређена<br>координатама), Poligon (одређен бројем и координатама темена) и Piramida (одређена<br>типом основе – троугао, четвороугао... и висином). Потом је декларисана и променљива<br>типа *Piramida:<br><div class="code-blocks-container"><div class="code-block"><pre><code><span class="code-keyword">typedef struct</span><br>{<br><span class="code-keyword">float</span> x, y;<br>}<span class="code-bold">Tacka;</span></code></pre></div><div class="code-block"><pre><code><span class="code-keyword">typedef struct</span><br>{<br><span class="code-keyword">int</span> brojTemena;<br>Tacka temena[10];<br>}<span class="code-bold">Poligon;</span></code></pre></div><div class="code-block"><pre><code><span class="code-keyword">typedef struct</span><br>{<br>Poligon osnova;<br><span class="code-keyword">float</span> visina;<br>}<span class="code-bold">Piramida;</span></code></pre></div></div><br>Piramida *p;<br>Заокружити број испред наредбе којом се број темена основе пирамиде на коју показује<br>декларисани показивач *p, поставља на 6:\'',
        options: [
            'p.osnova.brojTemena=6;',
            'p.osnova->brojTemena=6;',
            'p->osnova.brojTemena=6;',
            'p->osnova[brojTemena]=6;',
            'p->osnova->brojTemena=6;'
        ],
        correctAnswer: 2,
        points: 2
    },
    {
        id: 22,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Петље',
        tags: ['C', 'Програмирање', 'Петље'],
        question: 'Заокружити бројеве испред ТАЧНИХ исказa који се односе на дефиницију <span class="code-keyword">while</span> циклуса:',
        options: [
            '<span class="code-keyword">while</span> циклус се извршава све док је услов логичка неистина (једнак нули),',
            '<span class="code-keyword">while</span> циклус се користи када се зна колико ће се пута циклус извршавати,',
            'у <span class="code-keyword">while</span> циклусу се увек прво проверава да ли је услов логичка истина, те ако јесте<br>наредба се извршава',
            'код <span class="code-keyword">while</span> циклуса се може десити да се тело циклуса не изврши ниједном (на почетку<br>услов није задовољен).'
        ],
        correctAnswer: [2, 3],
        points: 1
    },
    {
        id: 23,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Петље',
        tags: ['C', 'Програмирање', 'Петље'],
        question: 'Наведени су искази који се односе на дефиницију <span class="code-keyword">do</span>-<span class="code-keyword">while</span> циклуса. Заокружити бројеве<br>испред ТАЧНИХ исказа:',
        options: [
            'Користи се када се не зна колико ће се пута циклус понављати,',
            'Прво се извршава тело циклуса, а затим израчунава вредност логичког израза. Ако се<br>добије логичка неистина, циклус се поновно извршава.',
            'Циклус се завршава када услов добија вредност логичке истине',
            'Циклус се извршава барем једном.'
        ],
        correctAnswer: [0, 3],
        points: 1
    },
    {
        id: 24,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Бинарне датотеке',
        tags: ['C', 'Програмирање', 'Бинарне датотеке'],
        question: 'Заокружити бројеве испред понуђених тврдњи које представљају тачне наставке изјаве<br>која се односи на повратну вредност функције <span class="code-keyword">fopen</span>:<br>При покушају да датотеку отворимо за читање, функција <span class="code-keyword">fopen</span>...',
        options: [
            'ако датотека не постоји, изазива грешку која доводи до пуцања програма',
            'ако датотека не постоји, креира празну датотеку, поставља се на њен почетак и<br>враћа показивач на ту датотеку',
            'враћа NULL показивач ако датотека не постоји',
            'ако датотека постоји, враћа показивач на ту датотеку'
        ],
        correctAnswer: [2, 3],
        points: 1
    },
    {
        id: 25,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Основе',
        tags: ['C', 'Програмирање', 'Основе', 'Декларација'],
        question: 'Дате су наредбе декларације променљивих (са и без иницијализације вредности)<br>написане на програмском језику Ц. Заокружити бројеве испред исправно написаних<br>наредби декларације променљивих:',
        options: [
            '<span class="code-keyword">int</span> a=b=c=5;',
            '<span class="code-keyword">int</span> a=5, b=5, c=5;',
            '<span class="code-keyword">char</span> zn=<span class="code-string">"a"</span>;',
            '<span class="code-keyword">long</span> a; b=5; c;',
            '<span class="code-keyword">int</span> a=0xf2;',
            '<span class="code-keyword">char</span> zn=\'\\b\';'
        ],
        correctAnswer: [1, 4, 5],
        points: 1.5
    },
    {
        id: 26,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Оператори',
        tags: ['C', 'Програмирање', 'Оператори', 'Декларација'],
        question: 'Декларисане су следеће променљиве:<br><br><div class="question-code"><span class="code-keyword">float</span> x, z;<br><span class="code-keyword">const</span> <span class="code-keyword">float</span> y;<br></div><br>Заокружити бројеве испред НЕИСПРАВНО написаних наредби доделе вредности<br>променљивама:',
        options: [
            'x %= y;',
            'x =+ 5;',
            'x += y + 5;',
            'x =/ y + 5;',
            'y = x + z;',
            'x = z = y + 5;'
        ],
        correctAnswer: [0, 3, 4],
        points: 1.5
    },
    {
        id: 27,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Унос',
        tags: ['C', 'Програмирање', 'Унос'],
        question: 'Дата je наредба декларације <span class="code-keyword">int</span> a, b;<br>Имајући у виду дату декларацију, заокружити бројеве испред НЕИСПРАВНО написаних<br>наредби форматираног уноса података:',
        options: [
            '<span class="code-keyword">scanf</span>("<span class="code-format-specifier">%d%f</span>", &a, &b);',
            '<span class="code-keyword">scanf</span>("<span class="code-format-specifier">%d%*d</span>", &a, &b);',
            '<span class="code-keyword">scanf</span>("<span class="code-format-specifier">%d%d</span>", &a, &b);',
            '<span class="code-keyword">scanf</span>("<span class="code-format-specifier">%d%d</span>", a, b);',
            '<span class="code-keyword">scanf</span>("<span class="code-format-specifier">%d%*d</span>", &a);',
            '<span class="code-keyword">scanf</span>("<span class="code-format-specifier">%5d%5d</span>", &a, &b);'
        ],
        correctAnswer: [0, 1, 3],
        points: 1.5
    },
    {
        id: 28,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Низови',
        tags: ['C', 'Програмирање', 'Низови'],
        question: 'Дате су наредбе декларације и иницијализације једнодомензионалног низа целих бројева<br>у програмском језику Ц. Заокружити бројеве испред исправно написаних наредби<br>декларације и иницијализације једнодимензионалног низа:',
        options: [
            '<span class="code-keyword">int</span> a[10]={1,2,3};',
            '<span class="code-keyword">int</span> a[5]={-3, -2, -1, 0, 1, 2, 3};',
            '<span class="code-keyword">int</span> a[]={10,20,30,40,50};',
            '<span class="code-keyword">int</span>[5] a={1, 2, 3, 4, 5};',
            '<span class="code-keyword">int</span> a={10,20,30,40,50};',
            '<span class="code-keyword">int</span> a[5]={\'1\', \'2\', \'3\', \'4\', \'5\'};'
        ],
        correctAnswer: [0, 2, 5],
        points: 1.5
    },
    {
        id: 29,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Показивачи',
        tags: ['C', 'Програмирање', 'Показивачи'],
        question: 'Термин "адресна аритметика" се односи на извођење аритметичких операција над<br>показивачима. Анализирати дате исказе који дефинишу дозвољене аритметичке<br>операције над показивачима. Заокружити бројеве испред тачних исказа:',
        options: [
            'Додела вредности једног показивача другом.',
            'Додавање рационалног податка на вредност показивача и одузимање рационалног податка од вредности показивача.',
            'Одузимање и упоређивање два показивача.',
            'Идентификатор низа је показивач на почетак низа и може му се мењати вредност.',
            'Упоређивање показивача са NULL.',
            'Сабирањем два показивача, добија се нови показивач.'
        ],
        correctAnswer: [0, 2, 4],
        points: 1.5
    },
    {
        id: 30,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Низови',
        tags: ['C', 'Програмирање', 'Низови', 'Константе'],
        question: 'Наредбама програмског језика Ц дата је декларација једне симболичке константе и једне<br>константне променљиве:<br><div class="question-code"><span class="code-keyword">#define k 50</span><br><span class="code-keyword">int</span> m=100; ...</div><br>Заокружити бројеве испред исправно написаних наредби декларације<br>дводимензионалног низа целих бројева (матрице):',
        options: [
            '<span class="code-keyword">int</span> a [ k ][ k ];',
            '<span class="code-keyword">int</span> b [ k ][ m ];',
            '<span class="code-keyword">int</span> c [ k ][ 10 ];',
            '<span class="code-keyword">int</span> x [100 ][ 50];',
            '<span class="code-keyword">int</span> y [10, 10];',
            '<span class="code-keyword">int</span> z [ m ][ 10 ];'
        ],
        correctAnswer: [0, 2, 3],
        points: 1.5
    },
    {
        id: 31,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Основе', // Assuming 'Основе' based on previous context, can be adjusted if a more specific lecture is appropriate
        tags: ['C', 'Програмирање'],
        question: 'У следећем задатку заокружити бројеве испред тражених одговора.<br>Дата је наредба у Ц језику, која температуру у Целзијусима tempc претвара у<br>температуру у Фаренхајтима tempf. Подаци tempc и tempf су реални бројеви обичне<br>тачности. Проценити који изрази дају тачно решење.',
        options: [
            'temf = (9 / 5) * temc + 32;',
            'temf = 9 / 5 * temc + 32;',
            'temf = 9 * temc / 5 + 32;',
            'temf = 32 + 9 * temc / 5;'
        ],
        correctAnswer: [2, 3],
        points: 2
    },
    {
        id: 32,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Условне наредбе', // Assuming 'Условне наредбе' based on content
        tags: ['C', 'Програмирање', 'Условне наредбе', 'switch'],
        question: 'Дата је if-else наредба:<br><br><div class="question-code"><span class="code-keyword">if</span>(a==3 || a==5) p++;<br><span class="code-keyword">else</span> p--;</div><br>Заокружити бројеве испред понуђених <span class="code-keyword">switch</span> наредби које су еквивалентне датој if-else<br>наредби:',
        options: [
            'switch(a){<br><br><span class="code-keyword">case</span> 3: p++; <span class="code-keyword">break</span>;<br><span class="code-keyword">case</span> 5: p++; <span class="code-keyword">break</span>;<br><span class="code-keyword">default</span>: p--;<br><br>}',
            'switch(a){<br><br><span class="code-keyword">case</span> 3: <span class="code-keyword">case</span> 5: p++; <span class="code-keyword">break</span>;<br>p--;<br><br>}',
            'switch(a){<br><br><span class="code-keyword">case</span> 3: <span class="code-keyword">case</span> 5: p++; <span class="code-keyword">break</span>;<br><span class="code-keyword">default</span>: p--;<br><br>}',
            'switch(a){<br><br><span class="code-keyword">case</span> 3: <span class="code-keyword">case</span> 5: p++;<br><span class="code-keyword">default</span>: p--;<br><br>}'
        ],
        correctAnswer: [0, 2],
        points: 2
    },
    {
        id: 33,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Показивачи', // Assuming 'Показивачи' based on content
        tags: ['C', 'Програмирање', 'Показивачи', 'Низови', 'calloc'],
        question: 'У програму на програмском језику Ц извршена је следећа декларација, а касније и<br>резервација меморијског простора за низ реалних бројева обичне талности дужине n:<br><div class="question-code"><span class="code-keyword">float</span> *B;<br><span class="code-keyword">int</span> n;<br>B=(<span class="code-keyword">float</span>*)calloc(n,<span class="code-keyword">sizeof</span>(<span class="code-keyword">float</span>));</div><br>Заокружити бројеве испред исправно написаних наредби за ПРИКАЗ i-тог елемента низа<br>B:',
        options: [
            '<span class="code-keyword">printf</span>("<span class="code-format-specifier">%f</span>", B[i]);',
            '<span class="code-keyword">printf</span>("<span class="code-format-specifier">%f</span>", &B[i]);',
            '<span class="code-keyword">printf</span>("<span class="code-format-specifier">%f</span>", B+i);',
            '<span class="code-keyword">printf</span>("<span class="code-format-specifier">%p</span>", *(B+i));',
            '<span class="code-keyword">printf</span>("<span class="code-format-specifier">%f</span>", *(B+i));'
        ],
        correctAnswer: [0, 4],
        points: 2
    },
    {
        id: 34,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Низови', // Assuming 'Низови' based on content
        tags: ['C', 'Програмирање', 'Низови', 'calloc', 'scanf'],
        question: 'У програму на програмском језику Ц извршена је следећа декларација, а касније и<br>резервација меморијског простора за низ реалних бројева обичне талности дужине n:<br><div class="question-code"><span class="code-keyword">float</span> *B;<br><span class="code-keyword">int</span> n;<br>B=(<span class="code-keyword">float</span>*)<span class="code-keyword">calloc</span>(n,<span class="code-keyword">sizeof</span>(<span class="code-keyword">float</span>));</div><br>Заокружити бројеве испред исправно написаних наредби за УНОС i-тог елемента низа B:',
        options: [
            '<span class="code-keyword">scanf</span>("<span class="code-format-specifier">%f</span>", B[i]);',
            '<span class="code-keyword">scanf</span>("<span class="code-format-specifier">%f</span>", B+i);',
            '<span class="code-keyword">scanf</span>("<span class="code-format-specifier">%p</span>", B+i);',
            '<span class="code-keyword">scanf</span>("<span class="code-format-specifier">%f</span>", &B[i]);',
            '<span class="code-keyword">scanf</span>("<span class="code-format-specifier">%f</span>", *(B+i));'
        ],
        correctAnswer: [1, 3],
        points: 2
    },
    {
        id: 35,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Функције', // Assuming 'Функције' based on content
        tags: ['C', 'Програмирање', 'Функције', 'Прототип'],
        question: 'Дати су прототипови функција написани у програмском језику Ц. Заокружити бројеве<br>испред исправно написаних прототипова функција:',
        options: [
            '<span class="code-keyword">float</span>* pp1(<span class="code-keyword">int</span> a, <span class="code-keyword">int</span> b, <span class="code-keyword">int</span> c);',
            '<span class="code-keyword">int</span> pp2(<span class="code-keyword">int</span> a[][10], <span class="code-keyword">int</span> n);',
            '<span class="code-keyword">int</span> pp3(<span class="code-keyword">int</span> a[], n; <span class="code-keyword">float</span> b);',
            '<span class="code-keyword">void</span> pp4(<span class="code-keyword">int</span> *a, <span class="code-keyword">int</span> n);',
            '<span class="code-keyword">int</span> pp5(<span class="code-keyword">int</span> a[][], <span class="code-keyword">int</span> n);',
            '<span class="code-keyword">int</span> pp6(<span class="code-keyword">int</span> a[], <span class="code-keyword">int</span> n);',
            '<span class="code-keyword">int</span> pp7(<span class="code-keyword">int</span> a, b, c);',
            '<span class="code-keyword">float</span>[ ] pp8(<span class="code-keyword">float</span> a[ ], <span class="code-keyword">int</span> n);'
        ],
        correctAnswer: [0, 1, 3, 5],
        points: 2
    },
    {
        id: 36,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Бинарне датотеке', // Assuming 'Бинарне датотеке' based on content
        tags: ['C', 'Програмирање', 'Бинарне датотеке', 'fopen'],
        question: 'Заокружити бројеве испред понуђених тврдњи које представљају тачне наставке изјаве<br>која се односи на повратну вредност функције <span class="code-keyword">fopen</span>:<br>При покушају да датотеку отворимо за писање, функција <span class="code-keyword">fopen</span>...',
        options: [
            'ако датотека не постоји, креира празну датотеку, поставља се на њен почетак и<br>враћа показивач на ту датотеку',
            'враћа NULL показивач ако датотека не постоји',
            'ако датотека постоји, излази упозорење да ће њен садржај бити уништен при<br>отварању',
            'ако датотека не постоји, изазива грешку која доводи до пуцања програма',
            'ако датотека постоји, уништава њен садржај без упозорења'
        ],
        correctAnswer: [0, 4],
        points: 2
    },
    {
        id: 37,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Бинарне датотеке', // Assuming 'Бинарне датотеке' based on content
        tags: ['C', 'Програмирање', 'Бинарне датотеке', 'fread', 'Низови'],
        question: 'У програмском језику Ц је декларисана низовна променљива:<br><br><div class="question-code"><span class="code-keyword">int</span> niz[10];</div><br>Заокружити бројеве испред исправно написаних наредби читања низа целих бројева<br>дужине 10 из бинарног фајла на који показује показивач *in:',
        options: [
            '<span class="code-keyword">fread</span>(niz, <span class="code-keyword">sizeof</span> (<span class="code-keyword">int</span>), 10, in);',
            '<span class="code-keyword">fread</span>(&niz, <span class="code-keyword">sizeof</span> (<span class="code-keyword">int</span>), 10, in);',
            '<span class="code-keyword">fread</span>(&niz, <span class="code-keyword">sizeof</span> niz, 1, in);',
            '<span class="code-keyword">fread</span>(niz, <span class="code-keyword">sizeof</span> niz, 1, in);',
            '<span class="code-keyword">fread</span>(niz, <span class="code-keyword">sizeof</span> (niz), 1, *in);',
            '<span class="code-keyword">fread</span>(niz, <span class="code-keyword">sizeof</span> (<span class="code-keyword">int</span>)*10, in);'
        ],
        correctAnswer: [0, 3],
        points: 2
    },
    {
        id: 38,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Структуре', // Based on content
        tags: ['C', 'Програмирање', 'Структуре'],
        question: 'У програмском језику C декларисан је структурни тип података Ucenik, а затим и<br>променљива типа Ucenik:<br><div class="question-code"><span class="code-keyword">typedef struct</span><br>{<br><span class="code-keyword">char</span> ime[50];<br><span class="code-keyword">int</span> razred;<br><span class="code-keyword">int</span> ocene[10];<br>}<span class="code-bold">Ucenik;</span> ...<br><span class="code-keyword">int</span> i; Ucenik x;</div><br>Заокруживањем обележити исправne начине приступа пољима структурне променљиве x:',
        options: [
            'x.ocene[i]',
            '*x.razred',
            'x->ime',
            'x[i].ocene',
            'x.ime'
        ],
        correctAnswer: [0, 4],
        points: 2
    },
    {
        id: 39,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Структуре', // Based on content
        tags: ['C', 'Програмирање', 'Структуре', 'Показивачи'],
        question: 'У програмском језику Ц декларисан је структурни тип података Putovanje, а затим и<br>променљива типа *Putovanje:<br><div class="question-code"><span class="code-keyword">typedef struct</span><br>{<br><span class="code-keyword">char</span> start[50], cilj[50];<br><span class="code-keyword">int</span> kilometraza;<br>}<span class="code-bold">Putovanje;</span> ...<br>Putovanje *p;</div><br>Заокруживањем обележити исправne начине приступа пољима структурне променљиве:',
        options: [
            '*p->kilometraza',
            '(*p).kilometraza',
            '&p->kilometraza',
            'p->start',
            '*(p).start'
        ],
        correctAnswer: [1, 3],
        points: 2
    },
    {
        id: 40,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Функције', // Based on content
        tags: ['C', 'Програмирање', 'Функције', 'Низови', 'Показивачи'],
        question: 'Дат је прототип функције написан у програмском језику Ц:<br><div class="question-code"><span class="code-keyword">void</span> Saberi(<span class="code-keyword">int</span> n, <span class="code-keyword">int</span> *a, <span class="code-keyword">int</span> *b);</div><br>У main функцији дате су следеће декларације променљивих:<br><div class="question-code"><span class="code-keyword">int</span> x[50][50], y[50], m, j, i;</div><br>Заокружити бројеве испред исправно написаних позива декларисане функције:',
        options: [
            'Saberi(m, y[i], y[i+1]);',
            'Saberi(y[i], x[i], x[i+1]);',
            'Saberi(m, y, x[i][j]);',
            'Saberi(y, x[i], x[i+1]);',
            'Saberi(10, y, x[0]);',
            'Saberi(x[i][j], x[i], x[j]);'
        ],
        correctAnswer: [1, 4, 5],
        points: 3
    },
    {
        id: 41,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Функције', // Based on content
        tags: ['C', 'Програмирање', 'Функције', 'Показивачи', 'Низови', 'Стрингови'],
        question: 'Дат је прототип функције написан у програмском језику Ц:<br><br><div class="question-code"><span class="code-keyword">void</span> Umetni(<span class="code-keyword">char</span> *a, <span class="code-keyword">char</span> k);</div><br>У main функцији дате су следеће декларације променљивих:<br><div class="question-code"><span class="code-keyword">char</span> s1[20], *s2, s3;</div><br>Заокружити бројеве испред исправно написаних позива декларисане функције:',
        options: [
            'Umetni(s2, s1[i]);',
            'Umetni(s2, s1);',
            "Umetni(s2, 'A');",
            'Umetni(s1, s3);',
            'Umetni(*s2, s3);',
            'Umetni(s3, &s1);'
        ],
        correctAnswer: [0, 2, 3],
        points: 3
    },
    {
        id: 42,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Унос', // Based on content
        tags: ['C', 'Програмирање', 'Унос', 'scanf'],
        question: 'Дата су наредба декларације, а затим и наредба форматираног уноса вредности у<br>променљиве, написана на програмском језику Ц:<br><div class="question-code"><span class="code-keyword">int</span> x, y;<br><span class="code-keyword">scanf</span>("%3i%3i", &x, &y);</div><br>Следи тастатурни унос у облику: 12345 12345<br>За сваку променљиву одредити и на одговарајућу линију уписати, коју ће вредност<br>променљива имати по извршењу наредби:<br>1. променљива х добија вредност х = <input type="text" class="fill-in-input" data-correct="123"><span class="fill-in-indicator"></span><br>2. променљива у добија вредност у = <input type="text" class="fill-in-input" data-correct="45">',
        options: [], // No options for fill-in questions
        correctAnswer: ["123", "45"], // Store correct answers as strings
        points: 2,
        type: 'fill-in'
    },
    {
        id: 43,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Оператори', // Based on content
        tags: ['C', 'Програмирање', 'Оператори'],
        question: 'Дати је декларација променљивих <span class="code-keyword">int</span> a=3, b=15;<br>Израчунати вредност коју ће променљиве имати по извршењу следеће наредбe:<br><br><div class="question-code"><span class="code-keyword">b</span> %= ++ <span class="code-keyword">a</span>;</div><br><br><span class="code-keyword">a</span> = <input type="text" class="fill-in-input" data-correct="4"><span class="fill-in-indicator"></span><br><span class="code-keyword">b</span> = <input type="text" class="fill-in-input" data-correct="3"><span class="fill-in-indicator"></span>', // Store correct answers as strings
        options: [], // No options for fill-in questions
        correctAnswer: ["4", "3"],
        points: 2,
        type: 'fill-in'
    },
    {
        id: 44,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Условне наредбе', // Based on content - Corrected lecture name
        tags: ['C', 'Програмирање', 'Условне наредбе'],
        question: 'Одредити вредности које ће променљиве х и у имати по извршењу следећег кода:<br><br><div class="question-code"><span class="code-keyword">int</span> x=10;<br><span class="code-keyword">int</span> y=20;<br><span class="code-keyword">if</span> (x>50)<br><span class="code-keyword">x</span>-=10;<br><span class="code-keyword">y</span>+=10;</div><br>Уписати добијене вредности на предвиђене линије:<br>x = <input type="text" class="fill-in-input" data-correct="10"> y = <input type="text" class="fill-in-input" data-correct="30">',
        options: [], // No options for fill-in questions
        correctAnswer: ["10", "30"], // Store correct answers as strings
        points: 2,
        type: 'fill-in'
    },
    {
        id: 45,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Условне наредбе',
        tags: ['C', 'Програмирање', 'switch', 'Оператори'],
        question: 'У програмском језуку Ц декларисане су две целобројне променљиве:<br><div class="question-code"><span class="code-keyword">int</span> x=0, izbor;</div><br>За дате вредности променљиве izbor, одреди вредност променљиве х по извршењу<br>следеће наредбе вишестуког гранања и уписати их на предвиђене линије:<br><pre><code><span class="code-keyword">switch</span> (izbor)<br>{<br><span class="code-keyword">case</span> 1: x += 1;<br><span class="code-keyword">case</span> 2: x += 2; <span class="code-keyword">break</span>;<br><span class="code-keyword">case</span> 3: x += 3;<br><span class="code-keyword">default</span>: x = 100;<br><span class="code-keyword">case</span> 4: x += 4;<br><span class="code-keyword">case</span> 5: x += 5;<br>}<br></code></pre><br><div class="fill-in-layout"><div class="fill-in-column">1. за izbor=3, x= <input type="text" class="fill-in-input" data-correct="109"><span class="fill-in-indicator"></span><br>2. за izbor=10, x= <input type="text" class="fill-in-input" data-correct="109"><span class="fill-in-indicator"></span></div><div class="fill-in-column">3. за izbor=4, x= <input type="text" class="fill-in-input" data-correct="9"><span class="fill-in-indicator"></span><br>4. за izbor=2, x= <input type="text" class="fill-in-input" data-correct="2"><span class="fill-in-indicator"></span></div></div>',
        options: [],
        correctAnswer: ["109", "109", "9", "2"],
        points: 2,
        type: 'fill-in'
    },
    {
        id: 46,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Низови',
        tags: ['C', 'Програмирање', 'Низови', 'Петље'],
        question: 'Наредбама програмског језика Ц декларисана је правоугаона матрица и три целобројне<br>променљиве:<br><div class="code-keyword">int mat [10] [20]; <span class="code-keyword">int</span> x, N, M;</div><br>где N представља број врста, а М број колона правоугаоне матрице mat.<br>Допунити изразима који недостају код петље која има задатак да дуплира све елементе<br>последње колоне матрице:<br><div class="code-keyword">for(x = 0; x < <input type="text" class="fill-in-input" data-correct="N">; x++)<br>&nbsp;&nbsp;mat[ <input type="text" class="fill-in-input" data-correct="x"> ][ <input type="text" class="fill-in-input" data-correct="M-1"> ] *= 2;</div>',
        options: [],
        correctAnswer: ["N", "x", "M-1"],
        points: 2,
        type: 'fill-in'
    },
    
    {
        id: 47,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Низови',
        tags: ['C', 'Програмирање', 'Низови', 'Петље'],
        question: 'Дата су следеће декларације: <span class="code-keyword">int</span> p[200], i, n, k;<br><br>А затим и део кода који треба да из низа р дужине n, сажимањем <span class="code-bold">ИЗБАЦИ</span> елеменат низа са позиције k, а затим ажурира нову дужину низа.<br><br>Имајући у виду дату иницијализацију петље, у предвиђена поља унеси одговарајуће<br>елементе преписивањем израза из листе понуђених израза (подразумевати да су све<br>потребне променљиве иницијализоване):<br><div class="code-and-options-container"><div class="code-block"><pre><code><span class="code-keyword">for</span>(i=k; i <input type="text" class="fill-in-input" data-correct="&lt;n-1">; <input type="text" class="fill-in-input" data-correct="i++">)<br>&nbsp;&nbsp;<input type="text" class="fill-in-input" data-correct="p[i]"> = <input type="text" class="fill-in-input" data-correct="p[i+1]"> ;<br><br>n--;</code></pre></div><div class="options-list">1. p [i+1]<br>2. p [i-1]<br>3. p [i]<br>4. p [k]<br>5. i ++<br>6. i - -<br>7. &lt;n<br>8. &lt;n-1</div></div>',
        options: [],
        correctAnswer: ["<n-1", "i++", "p[i]", "p[i+1]"],
        points: 3,
        type: 'fill-in'
    },
    {
        id: 48,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Низови',
        tags: ['C', 'Програмирање', 'Низови', 'Петље'],
        question: 'Наредбама програмског језика Ц декларисана је правоугаона матрица и три целобројне<br>променљиве:<br><div class="question-code"><span class="code-keyword">int</span> mat [10] [20]; <span class="code-keyword">int</span> k, N, M;</div><br>где N представља број врста, а М број колона правоугаоне матрице mat.<br>Допунити изразима који недостају код петље која има задатак да дуплира све елементе<br>прве врсте матрице:<br><div class="code-block"><pre><code><span class="code-keyword">for</span>(k=0; k < <input type="text" class="fill-in-input" data-correct="M"><span class="fill-in-indicator"></span>; k++)<br>&nbsp;&nbsp;mat[ <input type="text" class="fill-in-input" data-correct="0"><span class="fill-in-indicator"></span> ][ <input type="text" class="fill-in-input" data-correct="k"><span class="fill-in-indicator"></span> ]*=2;</code></pre></div>',
        options: [],
        correctAnswer: ["M", "0", "k"],
        points: 2,
        type: 'fill-in'
    },
    {
        id: 49,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Оператори',
        tags: ['C', 'Програмирање', 'Оператори'],
        question: 'Дати су изрази формирани коришћењем математичких оператора. Водећи рачуна о<br>типовима података, одредити вредности датих израза и уписати их линију у продужетку.<br>Ако израз изазива грешку, уместо вредности, написати <span class="code-bold">error</span>:<br><br>1. 10 / 4. = <input type="text" class="fill-in-input" data-correct="2.5"><span class="fill-in-indicator"></span><br>2. 10. / 5 = <input type="text" class="fill-in-input" data-correct="2.0"><span class="fill-in-indicator"></span><br>3. -10 % 3 = <input type="text" class="fill-in-input" data-correct="-1"><span class="fill-in-indicator"></span><br>4. 10. % 5 = <input type="text" class="fill-in-input" data-correct="error"><span class="fill-in-indicator"></span><br>5. 10 % (-3) = <input type="text" class="fill-in-input" data-correct="1"><span class="fill-in-indicator"></span><br>6. (100/3) % 6 = <input type="text" class="fill-in-input" data-correct="3"><span class="fill-in-indicator"></span>',
        options: [],
        correctAnswer: ["2.5", "2.0", "-1", "error", "1", "3"],
        points: 3,
        type: 'fill-in'
    },
    {
        id: 50,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Низови',
        tags: ['C', 'Програмирање', 'Низови', 'Показивачи', 'Петље'],
        question: 'Дата су следеће декларације: <span class="code-keyword">int</span> p[200], i, n, pom;<br>А затим и део кода који треба да врши циклично померање елемената низа р дужине n,<br>за једно место <span class="code-bold">удесно</span>. У коду недостају неки од елемената.<br>Имајући у виду дату иницијализацију петље, у предвиђена поља унеси одговарајуће<br>елементе преписивањем израза из листе понуђених израза (подразумевати да су све<br>потребне променљиве иницијализоване):<br><div class="code-and-options-container"><div class="code-block"><pre><code>pom = <input type="text" class="fill-in-input" data-correct="p[n-1]"><span class="fill-in-indicator"></span>;<br><br><span class="code-keyword">for</span>(i=n-2; i <input type="text" class="fill-in-input" data-correct=">0"><span class="fill-in-indicator"></span>; <input type="text" class="fill-in-input" data-correct="i--"><span class="fill-in-indicator"></span>)<br>&nbsp;&nbsp;<input type="text" class="fill-in-input" data-correct="p[i]"><span class="fill-in-indicator"></span> = <input type="text" class="fill-in-input" data-correct="p[i-1]"><span class="fill-in-indicator"></span>;<br><br><input type="text" class="fill-in-input" data-correct="p[0]"><span class="fill-in-indicator"></span> = pom;</code></pre></div><div class="options-list">1. p [0]<br>2. p [n-1]<br>3. p [n]<br>4. p [i+1]<br>5. p [i-1]<br>6. p [i]<br>7. i++<br>8. i--<br>9. &gt;=0<br>10. &gt;0</div></div>',
        options: [],
        correctAnswer: ["p[n-1]", ">0", "i--", "p[i]", "p[i-1]", "p[0]"], // Correct answers corresponding to the fill-in inputs in order
        points: 3,
        type: 'fill-in'
    },
    {
        id: 51,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Низови', // Based on content
        tags: ['C', 'Програмирање', 'Низови', 'Показивачи', 'Петље'],
        question: 'Дата су следеће декларације: <span class="code-keyword">int</span> p[200], i, n, k, x;<br>А затим и део кода који треба да из низа р дужине n, УБАЦИ (инсертује) елеменат x на<br>позицију k, а затим ажурира нову дужину низа.<br>Имајући у виду дату иницијализацију петље, у предвиђена поља унеси одговарајуће<br>елементе преписивањем израза из листе понуђених израза (подразумевати да су све<br>потребне променљиве иницијализоване):<br><div class="code-and-options-container"><div class="code-block"><pre><code><span class="code-keyword">for</span>(i=n; i <input type="text" class="fill-in-input" data-correct=">k"><span class="fill-in-indicator"></span>; <input type="text" class="fill-in-input" data-correct="i--"><span class="fill-in-indicator"></span>)<br>&nbsp;&nbsp;<input type="text" class="fill-in-input" data-correct="p[i]"><span class="fill-in-indicator"></span> = <input type="text" class="fill-in-input" data-correct="p[i-1]"><span class="fill-in-indicator"></span>;<br><br><input type="text" class="fill-in-input" data-correct="p[k]"><span class="fill-in-indicator"></span> = x;<br><br>n++;</code></pre></div><div class="options-list">1. p [i+1]<br>2. p [i-1]<br>3. p[i]<br>4. p [k]<br>5. i ++<br>6. i - -<br>7. &gt;=k<br>8. &gt;k</div></div>',
        options: [],
        correctAnswer: [">k", "i--", "p[i]", "p[i-1]", "p[k]"],
        points: 3,
        type: 'fill-in'
    },

    {
        id: 52,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Низови', // Based on content
        tags: ['C', 'Програмирање', 'Низови', 'Петље'],
        question: 'У програмском језику Ц, дате су следеће декларације: <span class="code-keyword">int</span> А[50], i, n;<br>Потребно је формирти вектор са следећим вредностима:<br><br><table><thead><tr><th>i=0</th><th>i=1</th><th>i=2</th><th>i=3</th><th>i=4</th><th>i=5</th><th>...</th><th>i=n-1</th></tr></thead><tbody><tr><td>1</td><td>2</td><td>4</td><td>7</td><td>11</td><td>16</td><td>...</td><td>???</td></tr></tbody></table><br>Допунити програмски код којим се формира овај вектор:<br><div class="code-block"><pre><code>A[0]=1;<br><br><span class="code-keyword">for</span>(i = <input type="text" class="fill-in-input" data-correct="1"><span class="fill-in-indicator"></span>; i <input type="text" class="fill-in-input" data-correct="&lt;n"><span class="fill-in-indicator"></span>; i++)<br>&nbsp;&nbsp;<input type="text" class="fill-in-input" data-correct="A[i]"><span class="fill-in-indicator"></span> = <input type="text" class="fill-in-input" data-correct="A[i-1]+i"><span class="fill-in-indicator"></span>;</code></pre></div>',
        options: [],
        correctAnswer: ["1", "<n", "A[i]", "A[i-1]+i"], // Correct answers corresponding to the fill-in inputs in order
        points: 3,
        type: 'fill-in'
    },
    {
        id: 53,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Оператори', // Based on content
        tags: ['C', 'Програмирање', 'Оператори', 'Показивачи'],
        question: 'У програмском језику Ц, декларисане су и иницијализоване променљиве:<br><div class="question-code"><span class="code-keyword">int</span> x=40, y=50, z=60, *p1, *p2;</div><br>Одреди које ће вредности имати променљиве x, y и z после извршења следећег кода и<br>упиши на одговарајућу линију:<br><div class="code-block"><pre><code>p1 = &amp;x;<br>p2 = p1;<br>y = (*p2)+20;<br>z = *p2;</code></pre></div><br>x = <input type="text" class="fill-in-input" data-correct="40"><span class="fill-in-indicator"></span>; y = <input type="text" class="fill-in-input" data-correct="60"><span class="fill-in-indicator"></span>; z = <input type="text" class="fill-in-input" data-correct="40"><span class="fill-in-indicator"></span>;',
        options: [],
        correctAnswer: ["40", "60", "40"],
        points: 3,
        type: 'fill-in'
    },
    {
        id: 54,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Показивачи и низови',
        tags: ['показивачи', 'низови', 'C'],
        question: `Дат је део кода написан на програмском језику C:<br><pre>int a[7]={10,25,30,15,40,77,45}, *pa, x, y;
pa=a+4;
x=--(*pa)+5;
y=*(--pa)+5;</pre>Анализирати код и одредити вредности променљивих <b>x</b> и <b>y</b>, као и показивача <b>pa</b>, по извршењу све три извршне наредбе датог кода:<br>x = <input class='fill-in-input' size='2' data-correct='44'> <br>y = <input class='fill-in-input' size='2' data-correct='20'> <br>pa = a + <input class='fill-in-input' size='1' data-correct='3'>`,
        options: [],
        correctAnswer: ["44", "20", "3"],
        type: "fill-in",
        points: 3
    },
    {
        id: 55,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Показивачи и низови',
        tags: ['показивачи', 'низови', 'C'],
        question: `Дат је део кода написан на програмском језику C:<br><pre>int a[7]={81,12,35,97,40,52,17}, *pa, x, y;
pa=a+3;
x=*(pa-2)+1;
y=(*pa-2)+1;</pre>Анализирати код и одредити вредности променљивих <b>x</b> и <b>y</b>, као и показивача <b>pa</b>, по извршењу све три извршне наредбе датог кода:<br>x = <input class='fill-in-input' size='2' data-correct='13'> <br>y = <input class='fill-in-input' size='2' data-correct='96'> <br>pa = a + <input class='fill-in-input' size='1' data-correct='3'>`,
        options: [],
        correctAnswer: ["13", "96", "3"],
        type: "fill-in",
        points: 3
    },
    {
        id: 56,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Функције и показивачи',
        tags: ['функције', 'показивачи', 'C'],
        question: `Датa је дефиниција функције:<br><pre>void Transformisi(float *x, float *y, float z)
{
    z++;
    *x=*x+z;
    (*y)++;
}</pre>У главном програму су декларисане променљиве и извршен је позив функције:<br><pre>float a=10, b=10, c=10;
Transformisi(&a, &b, c);</pre>Одредити које вредности имају променљиве <b>a</b>, <b>b</b> и <b>c</b> по изласку из функције и уписати их на одговарајућу линију:<br>a = <input class='fill-in-input' size='2' data-correct='21'> <br>b = <input class='fill-in-input' size='2' data-correct='11'> <br>c = <input class='fill-in-input' size='2' data-correct='10'>`,
        options: [],
        correctAnswer: ["21", "11", "10"],
        type: "fill-in",
        points: 3
    },
    {
        id: 57,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Stringovi i pokazivači',
        tags: ['stringovi', 'pokazivači', 'C'],
        question: `На програмском језику Ц декларисан је и иницијализован стринг и два показивача:<br><pre>char s1[] = "Short Message Service", *s2, *s3;
s2 = strchr(s1, 'M'); // <span style='color:blue'>Message Service</span>
s3 = strrchr(s2, 'S'); // <span style='color:blue'>Service</span>
strncpy(s1+1, s2, 1);
strcpy(s1+2, s3);</pre>Одредити и на предвиђену линију уписати садржај означених стрингова по извршењу следећих наредби:<br><br>s1 = <input class='fill-in-input' size='10' data-correct='SMService'> <br>s2 = <input class='fill-in-input' size='10' data-correct='ice'> <br>s3 = <input class='fill-in-input' size='10' data-correct='Service'>`,
        options: [],
        correctAnswer: ["SMService", "ice", "Service"],
        type: "fill-in",
        points: 3
    },
    {
        id: 58,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Formatirani izlaz',
        tags: ['printf', 'formatiranje', 'C'],
        question: `Са леве стране дати су допунски параметри у функцији printf, а са десне стране значење тих параметара у програмском језику Ц. На линији испред значења унети број којим је означен одговарајући допунски параметар:<br><br>
1. (#)&nbsp;&nbsp;&nbsp;<input class='fill-in-input' size='1' data-correct='3'> означава да ће се децимална тачка у конверзији рационалних бројева који немају разломљени део.<br>
2. (0)&nbsp;&nbsp;&nbsp;<input class='fill-in-input' size='1' data-correct='4'> означава да се испред позитивног броја мора исписати знак плус<br>
3. (-)&nbsp;&nbsp;&nbsp;<input class='fill-in-input' size='1' data-correct='2'> нула код нумеричких података означава да ће се приликом равнања уз десну ивицу број допуњавати нулама, а не знаковима размак<br>
4. (+)&nbsp;&nbsp;&nbsp;<input class='fill-in-input' size='1' data-correct='1'> означава да ће се поравнавање вршити уз леву ивицу поља ширине n знакова, допунски знакови размака додају се иза, а не испред податка<br>`,
        options: [],
        correctAnswer: ["3", "4", "2", "1"],
        type: "fill-in",
        points: 2
    },
    {
        id: 59,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Formatirani izlaz',
        tags: ['printf', 'formatiranje', 'C'],
        question: `Декларисана је реална променљива <span class='code-keyword'>float</span> w=123.456;:<br><br>Са леве стране су дати различити прикази вредности променљиве добијени коришћењем наредби форматираног излаза које су приказане са десне стране. Поред сваке наредбе, на предвиђену линију уписати редни број приказа добијеног извршавањем те наредбе:<br><br>
1. 123.456000&nbsp;&nbsp;&nbsp;<input class='fill-in-input' size='1' data-correct='3'> printf("%g", w);<br>
2. 1.234560e+002&nbsp;&nbsp;&nbsp;<input class='fill-in-input' size='1' data-correct='1'> printf("%f", w);<br>
3. 123.456&nbsp;&nbsp;&nbsp;<input class='fill-in-input' size='1' data-correct='4'> printf("%.2f", w);<br>
4. 123.46&nbsp;&nbsp;&nbsp;<input class='fill-in-input' size='1' data-correct='2'> printf("%e", w);<br>`,
        options: [],
        correctAnswer: ["3", "1", "4", "2"],
        type: "fill-in",
        points: 2
    },
    {
        id: 60,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Matematički izrazi i C zapis',
        tags: ['matematika', 'izrazi', 'C'],
        question: `Са леве стране дати су математички изрази, а са десне запис израза на програмском језику Ц. На линији испред записа израза, унети број којим је означен одговарајући израз:<br><br>
<table style='width:100%;max-width:700px;border-collapse:separate;border-spacing:0 10px;'>
<tr>
  <td style='text-align:right;padding-right:20px;'>1. y = <span style='font-size:1.1em;'>&radic;<span style='text-decoration:overline;'>x+10</span></span> / (a + |b|)</td>
  <td><input class='fill-in-input' size='1' data-correct='3'> y = sqrt(x+10) / (a+fabs(b))</td>
</tr>
<tr>
  <td style='text-align:right;padding-right:20px;'>2. y = <span style='font-size:1.1em;'>&radic;<span style='text-decoration:overline;'>x+10</span></span> / a + |b|</td>
  <td><input class='fill-in-input' size='1' data-correct='4'> y = sqrt(x+10) / a + fabs(b)</td>
</tr>
<tr>
  <td style='text-align:right;padding-right:20px;'>3. y = (<span style='font-size:1.1em;'>&radic;<span style='text-decoration:overline;'>x</span></span> + 10) / (a + |b|)</td>
  <td><input class='fill-in-input' size='1' data-correct='2'> y = (sqrt(x)+10) / (a+fabs(b))</td>
</tr>
<tr>
  <td style='text-align:right;padding-right:20px;'>4. y = <span style='font-size:1.1em;'>&radic;<span style='text-decoration:overline;'>x+10</span></span> / a + |b|</td>
  <td><input class='fill-in-input' size='1' data-correct='1'> y = sqrt(x+10) / a+fabs(b)</td>
</tr>
</table>`,
        options: [],
        correctAnswer: ["3", "4", "2", "1"],
        type: "fill-in",
        points: 2
    },
    {
        id: 61,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Switch i rezultati',
        tags: ['switch', 'C', 'ekranski prikaz'],
        question: `Дат је код на програмском језику Ц:<br><pre>switch(c) {
    case 'A': case 'a': printf("Pravougaonik ");
    case 'B': case 'b': printf("Trougao "); break;
    case 'C': case 'c': printf("Krug ");
    default: printf("Duz "); break;
}</pre><br>Са десне стране су дате вредности променљиве c (скретница), а са леве стране резултат извршења кода за дату вредност скретнице. На линији испред вредности скретнице унети редни под којим је наведен одговарајући екраски приказ:<br><br>
<div style='margin-left:30px;'>
1. Krug Duz <input class='fill-in-input' size='1' data-correct='4' style='margin-left:10px; margin-right:6px;'> 'b'<br>
2. Pravougaonik Trougao Krug Duz <input class='fill-in-input' size='1' data-correct='6' style='margin-left:10px; margin-right:6px;'> 'K'<br>
3. Krug <input class='fill-in-input' size='1' data-correct='5' style='margin-left:10px; margin-right:6px;'> 'A'<br>
4. Trougao <input class='fill-in-input' size='1' data-correct='1' style='margin-left:10px; margin-right:6px;'> 'c'<br>
5. Pravougaonik Trougao<br>
6. Duz<br>
</div>`,
        options: [],
        correctAnswer: ["4", "6", "5", "1"],
        type: "fill-in",
        points: 2
    },
    {
        id: 62,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Tipovi promenljivih',
        tags: ['tipovi', 'promenljive', 'C'],
        question: `Са леве стране су набројани различити типови променљивих, а са десне су дате декларације променљивих у програмском језику Ц. На линији испред декларације унети редни број под којим је наведен одговарајући тип променљиве:<br><br>
<table style="border-collapse:separate; border-spacing:0 16px; font-size:1.2em;">
<tr>
  <td style="text-align:right; padding-right: 24px; vertical-align:middle;">1. Једнодимензионални низ<br>&nbsp;&nbsp;&nbsp;показивача на целе бројеве</td>
  <td style="white-space:nowrap;">
    <span style="display:inline-block; min-width:40px; border-bottom:2px solid #222; text-align:center; color:#2196f3; font-weight:500; font-size:1.2em; margin-right:10px; vertical-align:middle;">
      <input class='fill-in-input' style='width:28px; border:none; outline:none; background:transparent; color:#2196f3; font-size:1.1em; text-align:center;' data-correct='3'>
    </span>
    <code style="color:#1a237e; font-size:1.1em;">int *a;</code>
        </td>
</tr>
<tr>
  <td style="text-align:right; padding-right: 24px; vertical-align:middle;">2. Вектор целих бројева</td>
  <td style="white-space:nowrap;">
    <span style="display:inline-block; min-width:40px; border-bottom:2px solid #222; text-align:center; color:#2196f3; font-weight:500; font-size:1.2em; margin-right:10px; vertical-align:middle;">
      <input class='fill-in-input' style='width:28px; border:none; outline:none; background:transparent; color:#2196f3; font-size:1.1em; text-align:center;' data-correct='2'>
    </span>
    <code style="color:#1a237e; font-size:1.1em;">int a[100];</code>
        </td>
    </tr>
<tr>
  <td style="text-align:right; padding-right: 24px; vertical-align:middle;">3. Показивач на цео број</td>
  <td style="white-space:nowrap;">
    <span style="display:inline-block; min-width:40px; border-bottom:2px solid #222; text-align:center; color:#2196f3; font-weight:500; font-size:1.2em; margin-right:10px; vertical-align:middle;">
      <input class='fill-in-input' style='width:28px; border:none; outline:none; background:transparent; color:#2196f3; font-size:1.1em; text-align:center;' data-correct='5'>
    </span>
    <code style="color:#1a237e; font-size:1.1em;">int a*[100];</code>
  </td>
</tr>
<tr>
  <td style="text-align:right; padding-right: 24px; vertical-align:middle;">4. Цео број</td>
  <td style="white-space:nowrap;">
    <span style="display:inline-block; min-width:40px; border-bottom:2px solid #222; text-align:center; color:#2196f3; font-weight:500; font-size:1.2em; margin-right:10px; vertical-align:middle;">
      <input class='fill-in-input' style='width:28px; border:none; outline:none; background:transparent; color:#2196f3; font-size:1.1em; text-align:center;' data-correct='1'>
    </span>
    <code style="color:#1a237e; font-size:1.1em;">int *a[100];</code>
  </td>
</tr>
<tr>
  <td style="text-align:right; padding-right: 24px; vertical-align:middle;">5. Грешка у декларацији</td>
  <td></td>
</tr>
</table>`,
        options: [],
        correctAnswer: ["3", "2", "5", "1", "4"],
        type: "fill-in",
        points: 2
    },
    {
        id: 63,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Показивачи и низови',
        tags: ['показивачи', 'низови', 'C'],
        question: `У програмском језику Ц, декларисан је показивач на цео број и функцијом calloc додељен му је простор за смештај низа од n целих бројева:<br><pre><code><span class="code-keyword">int</span> *a, n;<br>scanf("<span class="code-format-specifier">%d</span>", &n);<br>a=(<span class="code-keyword">int</span>*)calloc(n, <span class="code-keyword">sizeof</span>(<span class="code-keyword">int</span>));</code></pre>У левој колони дати су изрази, а у десној опис њиховог значења. На линију испред сваког од израза унеси број којим је означено одговарајуће објашњење:<br><br><table style="border-collapse:separate; border-spacing:0 10px;">
<tr><td><input class='fill-in-input' size='1' data-correct='3'> &a[0];</td><td>1. вредност елемента на последњој позицији у низу</td></tr>
<tr><td><input class='fill-in-input' size='1' data-correct='1'> *(a+n-1);</td><td>2. адреса четвртог елемента у низу</td></tr>
<tr><td><input class='fill-in-input' size='1' data-correct='6'> a+4;</td><td>3. адреса почетног елемента низа</td></tr>
<tr><td><input class='fill-in-input' size='1' data-correct='5'> *a;</td><td>4. вредност елемента на предзадњој позицији низа</td></tr>
<tr><td></td><td>5. вредност елемента на почетној позицији у низу</td></tr>
<tr><td></td><td>6. адреса петог елемента у низу</td></tr>
</table>`,
        options: [],
        correctAnswer: ["3", "1", "6", "5"],
        type: "fill-in",
        points: 2
    },
    {
        id: 64,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Дводимензионални низови',
        tags: ['низови', 'матрице', 'C'],
        question: `Наредбама програмског језика Ц декларисано је дводимензионално поље реалних бројева (матрица) и три целобројне променљиве:<br><pre><code><span class="code-keyword">float</span> mat[10][10]; <span class="code-keyword">int</span> i, j, n;</code></pre>где променљива n представља димензију квадратне матрице mat.<br>Са леве стане су дате ознаке елемената матрице, а са десне њихово тумачење. На линију испред сваке ознаке унети редни број одговарајућег тумачења:<br><br><table style="border-collapse:separate; border-spacing:0 10px;">
<tr><td><input class='fill-in-input' size='1' data-correct='1'> mat[j][n-1]</td><td>1. елеменат у ј-тој врсти и последњој колони</td></tr>
<tr><td><input class='fill-in-input' size='1' data-correct='3'> mat[j]</td><td>2. и-та врста матрице</td></tr>
<tr><td><input class='fill-in-input' size='1' data-correct='5'> mat[0][j]</td><td>3. ј-та врста матрице</td></tr>
<tr><td><input class='fill-in-input' size='1' data-correct='2'> mat[i]</td><td>4. ј-та колона матрице</td></tr>
<tr><td></td><td>5. елеменат у првој врсти и ј-тој колони</td></tr>
<tr><td></td><td>6. грешка у нотацији</td></tr>
</table>`,
        options: [],
        correctAnswer: ["1", "3", "5", "2"],
        type: "fill-in",
        points: 2
    },
    {
        id: 65,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Датотеке',
        tags: ['датотеке', 'C'],
        question: `Са леве стране су наведене наредбе позиционирања у датотеци, а са десне описи ефеката датих наредби. На линију поред наредбе уписати редни број под којим је наведен опис ефекта наредбе:<br><br><table style="border-collapse:separate; border-spacing:0 10px;">
<tr><td>ftell(dat)</td><td><input class='fill-in-input' size='1' data-correct='3'> 1. позиционирање на почетак датотеке</td></tr>
<tr><td>fseek(dat, 0, SEEK_END)</td><td><input class='fill-in-input' size='1' data-correct='2'> 2. позиционирање на крај датотеке</td></tr>
<tr><td>fseek(dat, 0, SEEK_SET)</td><td><input class='fill-in-input' size='1' data-correct='1'> 3. одређује позицију у датотеци у виду броја бајтова од почетка датотеке</td></tr>
<tr><td>rewind(dat)</td><td><input class='fill-in-input' size='1' data-correct='3'> 4. ништа од понуђеног</td></tr>
</table>`,
        options: [],
        correctAnswer: ["3", "2", "1", "3"],
        type: "fill-in",
        points: 2
    },
    {
        id: 66,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Форматирани излаз',
        tags: ['форматирани излаз', 'типови података', 'C'],
        question: `Са леве стране дате су врсте конверзије, а са десне типови података који се користе у функцији за приказ података printf у програмском језику Ц. На линију испред типа података унеси број којим је означена одговарајућа конверзија:<br><br>
<table style="border-collapse:separate; border-spacing:0 10px;">
<tr><td>1. %d</td><td><input class='fill-in-input' size='1' data-correct='7'> short</td></tr>
<tr><td>2. %i</td><td><input class='fill-in-input' size='1' data-correct='1'> signed int (u dekadnom obliku)</td></tr>
<tr><td>3. %s</td><td><input class='fill-in-input' size='1' data-correct='4'> long</td></tr>
<tr><td>4. %ld</td><td><input class='fill-in-input' size='1' data-correct='8'> unsigned</td></tr>
<tr><td>5. %f</td><td><input class='fill-in-input' size='1' data-correct='2'> signed int (dekadni, heksadekadni ili oktalni oblik)</td></tr>
<tr><td>6. %e</td><td></td></tr>
<tr><td>7. %hd</td><td></td></tr>
<tr><td>8. %u</td><td></td></tr>
</table>`,
        options: [],
        correctAnswer: ["7", "1", "4", "8", "2", "", "", ""],
        type: "fill-in",
        points: 2.5
    },
    {
        id: 67,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Текстуалне датотеке',
        tags: ['датотеке', 'I/O', 'C'],
        question: `Са леве стране наведене су функције за читање и упис у текст датотеку, а са десне стране опис функције. На линију испред описа функције унети редни број под којим је наведена одговарајућа функција:<br><br>
<table style="border-collapse:separate; border-spacing:0 10px;">
<tr><td>1. fscanf</td><td><input class='fill-in-input' size='1' data-correct='5'> учитавање карактера из датотеке</td></tr>
<tr><td>2. fgets</td><td><input class='fill-in-input' size='1' data-correct='2'> учитавање реда из датотеке</td></tr>
<tr><td>3. fputs</td><td><input class='fill-in-input' size='1' data-correct='4'> форматирани упис података у датотеку</td></tr>
<tr><td>4. fprintf</td><td><input class='fill-in-input' size='1' data-correct='3'> упис стринга у датотеку</td></tr>
<tr><td>5. fgetc</td><td><input class='fill-in-input' size='1' data-correct='1'> форматирано учитавање података из датотеке</td></tr>
</table>`,
        options: [],
        correctAnswer: ["5", "2", "4", "3", "1"],
        type: "fill-in",
        points: 2.5
    },
    {
        id: 68,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Основе',
        tags: ['escape секвенце', 'C'],
        question: `Са леве стране су набројани неки од прелазних знакова тј. escape секвенце, а са десне стране дати су њихови описи. На линију испред описа упишите број под којим је наведена одговарајућа escape секвенца:<br><br>
<table style="border-collapse:separate; border-spacing:0 10px;">
<tr><td>1. \'\\n\'</td><td><input class='fill-in-input' size='1' data-correct='3'> враћање на почетак реда (carrage return)</td></tr>
<tr><td>2. \'\\t\'</td><td><input class='fill-in-input' size='1' data-correct='6'> системски звучник (bell)</td></tr>
<tr><td>3. \'\\r\'</td><td><input class='fill-in-input' size='1' data-correct='1'> прелаз у нови ред (new line)</td></tr>
<tr><td>4. \'\\b\'</td><td><input class='fill-in-input' size='1' data-correct='5'> није escape секвенца</td></tr>
<tr><td>5. \'\\h\'</td><td><input class='fill-in-input' size='1' data-correct='2'> хоризонтални табулатор (horizontal tab)</td></tr>
<tr><td>6. \'\\a\'</td><td><input class='fill-in-input' size='1' data-correct='4'> враћање једну курсорску позицију назад (backspace)</td></tr>
</table>`,
        options: [],
        correctAnswer: ["3", "6", "1", "5", "2", "4"],
        type: "fill-in",
        points: 3
    },
    {
        id: 69,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Функције',
        tags: ['функције', 'ctype.h', 'C'],
        question: `Са десне стране наведене су неке од функција библиотеке ctype.h, а са леве су дати њихови описи. Испред назива сваке од наведених функција, уписати редни број под којим је дат одговарајући опис:<br><br>
<table style="width:100%; border-collapse: collapse;">
    <tr>
        <td style="vertical-align: top; padding: 2px 0;">1. Да ли је с штампајући знак (укључујући и размак)?</td>
        <td style="vertical-align: top; padding: 2px 0;"><input class='fill-in-input' size='1' data-correct='6'> isspace(c)</td>
    </tr>
    <tr>
        <td style="vertical-align: top; padding: 2px 0;">2. Да ли је с велико слово?</td>
        <td style="vertical-align: top; padding: 2px 0;"><input class='fill-in-input' size='1' data-correct='5'> isdigit(c)</td>
    </tr>
    <tr>
        <td style="vertical-align: top; padding: 2px 0;">3. Да ли је с знак интерпункције?</td>
        <td style="vertical-align: top; padding: 2px 0;"><input class='fill-in-input' size='1' data-correct='7'> isalpha(c)</td>
    </tr>
    <tr>
        <td style="vertical-align: top; padding: 2px 0;">4. Да ли је с управљачки знак?</td>
        <td style="vertical-align: top; padding: 2px 0;"><input class='fill-in-input' size='1' data-correct='2'> isupper(c)</td>
    </tr>
    <tr>
        <td style="vertical-align: top; padding: 2px 0;">5. Да ли је с децимална цифра?</td>
        <td style="vertical-align: top; padding: 2px 0;"><input class='fill-in-input' size='1' data-correct='4'> iscntrl(c)</td>
    </tr>
    <tr>
        <td style="vertical-align: top; padding: 2px 0;">6. Да ли је с знак бели знак?</td>
        <td style="vertical-align: top; padding: 2px 0;"><input class='fill-in-input' size='1' data-correct='1'> isprint(c)</td>
    </tr>
    <tr>
        <td style="vertical-align: top; padding: 2px 0;">7. Да ли је с слово?</td>
        <td style="vertical-align: top; padding: 2px 0;"></td>
    </tr>
    <tr>
        <td style="vertical-align: top; padding: 2px 0;">8. Да ли је с хекса-децимална цифра?</td>
        <td style="vertical-align: top; padding: 2px 0;"></td>
    </tr>
</table>`,
        options: [],
        correctAnswer: ["6", "5", "7", "2", "4", "1"],
        type: "fill-in",
        points: 3
    },
    {
        id: 70,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Stringovi i pokazivači',
        tags: ['stringovi', 'pokazivači', 'C'],
        question: `На програмском језику Ц декларисане су променљиве:<br><pre><span class="code-keyword">char</span> s1[] = "Iwnt2CmyM8sagain", *sn;</pre><br>Са леве стране написани су изрази доделе вредности стрингу <span class="code-bold">sn</span>, а са десне стране понуђене су вредности стринга <span class="code-bold">sn</span>. На линију написати редни број под којим је наведена вредност стринга <span class="code-bold">sn</span> која се добија извршењем одговарајућег израза:<br><br>
<table style="width:100%; border-collapse: collapse;">
    <tr>
        <td style="vertical-align: top; padding: 2px 0;"><input class='fill-in-input' size='1' data-correct='4'> sn=strrchr(s1, 'a')-1;</td>
        <td style="vertical-align: top; padding: 2px 0;">1. NULL</td>
    </tr>
    <tr>
        <td style="vertical-align: top; padding: 2px 0;"><input class='fill-in-input' size='1' data-correct='2'> sn=strrchr(s1, 'a')+1;</td>
        <td style="vertical-align: top; padding: 2px 0;">2. "in"</td>
    </tr>
    <tr>
        <td style="vertical-align: top; padding: 2px 0;"><input class='fill-in-input' size='1' data-correct='6'> sn=strstr(s1, "my");</td>
        <td style="vertical-align: top; padding: 2px 0;">3. "ain"</td>
    </tr>
    <tr>
        <td style="vertical-align: top; padding: 2px 0;"><input class='fill-in-input' size='1' data-correct='1'> sn=strstr(s1, "T2");</td>
        <td style="vertical-align: top; padding: 2px 0;">4. "gain"</td>
    </tr>
    <tr>
        <td style="vertical-align: top; padding: 2px 0;"></td>
        <td style="vertical-align: top; padding: 2px 0;">5. "sagain"</td>
    </tr>
    <tr>
        <td style="vertical-align: top; padding: 2px 0;"></td>
        <td style="vertical-align: top; padding: 2px 0;">6. "myM8sagain"</td>
    </tr>
</table>`,
        options: [],
        correctAnswer: ["4", "2", "6", "1"],
        type: "fill-in",
        points: 3
    },
    {
        id: 71,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Типови променљивих',
        tags: ['C#', 'Програмирање', 'Променљиве'],
        question: 'Дати су типови променљивих у програмском језику C#. Одредити како се назива променљива која је дефинисана унутар неког метода.<br><br>Заокружите број испред очекиваног одговора:',
        options: [
            'Глобална променљива',
            'Статичка променљива',
            'Блоковска променљива',
            'Локална променљива'
        ],
        correctAnswer: 3,
        points: 1
    },
    {
        id: 72,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Чланови класе',
        tags: ['C#', 'Програмирање', 'Класе'],
        question: 'Одредити какви могу бити чланови класе (поља и методе) у програмском језику C#.<br><br>Заокружите број испред очекиваног одговора:',
        options: [
            'Локални и глобални',
            'Процедурални и непроцедурални',
            'Статички (класни) и нестатички (објектни)',
            'Спољашњи и унутрашњи'
        ],
        correctAnswer: 2,
        points: 1
    },
    {
        id: 73,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Статичка поља',
        tags: ['C#', 'Програмирање', 'Класе', 'Статички'],
        question: 'Одредити која поља су заједничка и јединствена за све креиране објекте неке класе дефинисане у објектно оријентисаном програмском језику C#.<br><br>Заокружите број испред очекиваног одговора:',
        options: [
            'Јавна',
            'Приватна',
            'Објектна',
            'Инстанцна',
            'Статичка'
        ],
        correctAnswer: 4,
        points: 1
    },
    {
        id: 74,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Нестатичка поља',
        tags: ['C#', 'Програмирање', 'Класе', 'Нестатички'],
        question: 'У програмском језику C# класа може да садржи статичка и не-статичка (инстанцна) поља. Дате су изјаве које се односе на статичка поља класе и међу њих је уметнута једна изјава која се односи на не-статичка (инстанцна) поља класе.<br><br>Заокружите број испред изјаве која се односи на не-статичка поља класе:',
        options: [
            'Поље које се може користити без конструисања иједног објекта те класе',
            'Поље које има исту вредност за све креиране објекте неке класе',
            'Поље чија се вредност може разликовати за сваки појединачни објекат неке класе',
            'Поље које се може користити унутар статичких метода класе, као и унутар метода инстанце'
        ],
        correctAnswer: 2,
        points: 1
    },
    {
        id: 75,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Конструктори',
        tags: ['C#', 'Програмирање', 'Конструктори'],
        question: 'Заокружите број испред исказа који представља исправан наставак дате тврдње:<br><br>При креирању објеката изведене класе...',
        options: [
            'извршава се само конструктор изведене класе',
            'прво се извршава конструктор родитељске класе, али само ако је позван кључном речју <span class="code-bold">base</span>',
            'обавезно се прво извршава конструктор изведене, а потом конструктор родитељске класе',
            'обавезно се прво извршава конструктор родитељске, а потом конструктор изведене класе'
        ],
        correctAnswer: 3,
        points: 1
    },
    {
        id: 76,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Кључне речи',
        tags: ['C#', 'Програмирање', 'Кључне речи', 'base'],
        question: 'У програмском језику C# користи се службена реч <span class="code-bold">base</span>. Проценити који од наредних исказа који дефинишу дату службену реч <span class="code-bold">НИЈЕ</span> тачан.<br><br>Заокружити број испред очекиваног одговора:',
        options: [
            'Службена реч <span class="code-bold">base</span> може послужити за позивање конструктора родитељске класе.',
            'Службена реч <span class="code-bold">base</span> може послужити за позивање приватних метода родитељске класе којима се другачије не може приступити.',
            'Службена реч <span class="code-bold">base</span> може послужити за позивање заклоњеног метода родитељске класе.',
            'Службена реч <span class="code-bold">base</span> може послужити за позивање заклоњеног поља родитељске класе.'
        ],
        correctAnswer: 1,
        points: 1
    },
    {
        id: 77,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Методе',
        tags: ['C#', 'Програмирање', 'Методе', 'Преоптерећење'],
        question: 'Дат је код програма у програмском језику C#:<br><pre><code><span class="code-keyword">namespace</span> TestPrimer {<br>    <span class="code-keyword">class</span> Program {<br>        <span class="code-keyword">static</span> <span class="code-keyword">void</span> Main(<span class="code-keyword">string</span>[] args) {<br>            Console.WriteLine(fun(17));<br>        }<br>        <span class="code-keyword">public</span> <span class="code-keyword">int</span> fun(<span class="code-keyword">int</span> n) { <span class="code-keyword">return</span> n; }<br>        <span class="code-keyword">public</span> <span class="code-keyword">void</span> fun(<span class="code-keyword">int</span> n) { Console.WriteLine(n); }<br>    }<br>}</code></pre><br>Анализирати код и заокружити број испред очекиваног одговора:',
        options: [
            'Програм има грешку, јер се не може одредити коју верзију преоптерећеног метода fun(...) треба позвати.',
            'Програм има грешку, јер је друга верзија преоптерећеног метода fun(...) дефинисана али се нигде не позива.',
            'Програм се нормално извршава и приказује 17 једанпут.',
            'Програм се нормално извршава и приказује 17 двапут.'
        ],
        correctAnswer: 0,
        points: 2
    },
    {
        id: 78,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Низови',
        tags: ['C#', 'Програмирање', 'Низови', 'Петље'],
        question: 'Дат је код програма у програмском језику C# који формира и штампа елементе низа а. Анализирати дати код и проценити шта ће се догодити након његовог извршавања:<br><pre><code><span class="code-keyword">namespace</span> TestPrimer {<br>    <span class="code-keyword">class</span> Program {<br>        <span class="code-keyword">static</span> <span class="code-keyword">void</span> Main(<span class="code-keyword">string</span>[] args) {<br>            <span class="code-keyword">int</span>[] a = new int[5];<br>            <span class="code-keyword">for</span> (<span class="code-keyword">int</span> i = 0; i < a.Length; i++) a[i] = i;<br>            Console.Write(a[i] + " ");<br>        }<br>    }<br>}</code></pre><br>Заокружити број испред очекиваног одговора:',
        options: [
            'Програм приказује бројеве 0 1 2 3 4 на екрану.',
            'Програм има грешку, јер ће у последњој наредби Console.Write metoda Main покушати приступ непостојећем елементу a[5].',
            'Програм приказује број 5 на екрану.',
            'Програм има грешку, јер променљива i у последњој наредби Console.Write у методу Main неће имати дефинисану вредност.'
        ],
        correctAnswer: 3,
        points: 2
    },
    {
        id: 79,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Низови',
        tags: ['C#', 'Програмирање', 'Низови', 'BinarySearch'],
        question: 'У програмском језику C# дата је декларација низа:<br><pre><code><span class="code-keyword">int</span> k;<br><span class="code-keyword">int</span>[] brojevi = {5, 12, 37, 7, 27, 33, 36};</code></pre><br>На основу дате декларације одредити шта је резултат позива<br><pre><code>k=Arrays.BinarySearch(brojevi, 37);</code></pre><br>Заокружити број испред очекиваног одговора:',
        options: [
            'k=0, јер метод BinarySearch прво изврши сортирање низа у опадајућем редоследу, па онда тражи задату вредност',
            'метод BinarySearch баца изузетак увек када је низ неуређен и програм "пуца"',
            'k=2, јер се тражени елеменат налази на позицији 2',
            'k добија неочекивану вредност јер низ мора бити сортиран у растућем поретку пре позива методе BinarySearch',
            'k=6, јер метод BinarySearch прво изврши сортирање низа у растућем редоследу, па онда тражи задату вредност'
        ],
        correctAnswer: 3,
        points: 2
    },
    {
        id: 80,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Стрингови и бројеви',
        tags: ['C#', 'Програмирање', 'Стрингови', 'Бројеви'],
        question: 'У програмском језику C# дата је декларација једне стринг и једне целобројне променљиве, као и део кода:<br><pre><code><span class="code-keyword">string</span> str = "Primer";<br><span class="code-keyword">int</span> broj = 66;<br>Console.WriteLine(str + broj + 65);<br>Console.WriteLine(broj + 65 + str);</code></pre><br>Анализирати код и проценити шта ће се приказати на екрану након његовог извршења.<br>Заокружити број испред очекиваног одговора:',
        options: [
            'Primer6665<br>131Primer',
            'Primer6665<br>6665Primer',
            'Primer131<br>131Primer',
            'PrimerBA<br>BAPrimer'
        ],
        correctAnswer: 0,
        points: 2
    },
    {
        id: 81,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Рекурзија',
        tags: ['C#', 'Програмирање', 'Рекурзија'],
        question: 'Дат је код у програмском језику C#, који дефинише рекурзивни метод. Анализирати код и одредити резултат извршавања задатог метода.<br><pre><code><span class="code-keyword">public</span> <span class="code-keyword">long</span> fun(<span class="code-keyword">int</span> n){<br>    <span class="code-keyword">return</span> n * fun(n - 1);<br>}</code></pre><br>Заокружити број испред очекиваног одговора:',
        options: [
            'Резултат позива fun(3) је 1.',
            'Резултат позива fun(3) је 2.',
            'Резултат позива fun(3) је 6.',
            'Позив fun(3) изазива грешку јер производи бесконачан ланац позива истог метода fun(...).'
        ],
        correctAnswer: 3,
        points: 2
    },
    {
        id: 82,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Рекурзија',
        tags: ['C#', 'Програмирање', 'Рекурзија'],
        question: 'Дат је код у програмском језику C#, који дефинише рекурзивни метод. Анализирати код и одредити резултат који ће се приказати на екрану.<br><pre><code><span class="code-keyword">namespace</span> TestPrimer {<br>    <span class="code-keyword">class</span> Program {<br>        <span class="code-keyword">static</span> <span class="code-keyword">void</span> Main(<span class="code-keyword">string</span>[] args) {<br>            fun(2);<br>        }<br>        <span class="code-keyword">public</span> <span class="code-keyword">static</span> <span class="code-keyword">void</span> fun(<span class="code-keyword">int</span> n) {<br>            <span class="code-keyword">while</span> (n > 1) {<br>                Console.Write((n - 1) + " ");<br>                fun(n - 1);<br>            }<br>        }<br>    }<br>}</code></pre><br>Заокружити број испред очекиваног одговора:',
        options: [
            'Програм на екрану не приказује ништа',
            'Програм на екрану приказује 1 2 3',
            'Програм на екрану приказује 3 2 1',
            'Програм на екрану бесконачно приказује 1 1 1 1 ...',
            'Програм на екрану бесконачно приказује 2 2 2 2 ...'
        ],
        correctAnswer: 3,
        points: 2
    },
    {
        id: 83,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Рекурзија',
        tags: ['C#', 'Програмирање', 'Рекурзија', 'Палиндром'],
        question: 'У програмском језику C# дат је рекурзивни метод који проверава да ли је неки стринг палиндром. Да би код био комплетиран потребно је допунити трећи ред условом <span class="code-keyword">if</span> наредбе.<br><pre><code><span class="code-keyword">public</span> <span class="code-keyword">static</span> <span class="code-keyword">bool</span> palindrom(<span class="code-keyword">String</span> s)<br>{<br>    <span class="code-keyword">if</span> (s.Length <= 1) <span class="code-keyword">return</span> <span class="code-keyword">true</span>; //базни случај<br>    <span class="code-keyword">else</span> <span class="code-keyword">if</span> (__________________) <span class="code-keyword">return</span> <span class="code-keyword">false</span>;<br>    <span class="code-keyword">else</span> <span class="code-keyword">return</span> palindrom(s.Substring(1, s.Length - 2));<br>}</code></pre><br>Заокружити број испред очекиваног одговора:',
        options: [
            's[0] != s[s.Length - 1]',
            's[0] != s[s.Length]',
            's[1] != s[s.Length - 1]',
            's[1] != s[s.Length]'
        ],
        correctAnswer: 0,
        points: 2
    },
    {
        id: 84,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Рекурзија',
        tags: ['C#', 'Програмирање', 'Рекурзија', 'Палиндром'],
        question: 'У програмском језику C# дат је рекурзивни метод који проверава да ли је неки стринг палиндром. Да би код био комплетиран потребно је допунити седми ред.<br><pre><code><span class="code-keyword">public</span> <span class="code-keyword">static</span> <span class="code-keyword">bool</span> Palindrom(<span class="code-keyword">String</span> s){<br>    <span class="code-keyword">return</span> Palindrom(s, 0, s.Length - 1);<br>}<br><span class="code-keyword">public</span> <span class="code-keyword">static</span> <span class="code-keyword">bool</span> Palindrom(<span class="code-keyword">String</span> s, <span class="code-keyword">int</span> levi, <span class="code-keyword">int</span> desni){<br>    <span class="code-keyword">if</span> (desni <= levi) <span class="code-keyword">return</span> <span class="code-keyword">true</span>; // bazni slučaj<br>    <span class="code-keyword">else</span> <span class="code-keyword">if</span> (s[levi] != s[desni]) <span class="code-keyword">return</span> <span class="code-keyword">false</span>;<br>    <span class="code-keyword">else</span> <span class="code-keyword">return</span> _____________________;<br>}</code></pre><br>Заокружити број испред очекиваног одговора:',
        options: [
            'Palindrom(s)',
            'Palindrom(s, levi, desni)',
            'Palindrom(s, levi + 1, desni - 1)',
            'Palindrom(s, levi + 1, desni)',
            'Palindrom(s, levi, desni - 1)'
        ],
        correctAnswer: 2,
        points: 2
    },
    {
        id: 85,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Рекурзија',
        tags: ['C#', 'Програмирање', 'Рекурзија', 'Бинарна претрага'],
        question: 'У програмском језику C# дат је рекурзивни метод за бинарно претраживање сортираног целобројног низа. Да би код био комплетиран потребно је допунити девети ред (означен линијом) помоћу понуђеног одговора:<br><pre><code><span class="code-keyword">public</span> <span class="code-keyword">static</span> <span class="code-keyword">int</span> TraziBroj(<span class="code-keyword">int</span>[] niz, <span class="code-keyword">int</span> broj) {<br>    <span class="code-keyword">return</span> TraziBroj(niz, broj, 0, niz.Length - 1);<br>}<br><span class="code-keyword">public</span> <span class="code-keyword">static</span> <span class="code-keyword">int</span> TraziBroj(<span class="code-keyword">int</span>[] niz, <span class="code-keyword">int</span> broj, <span class="code-keyword">int</span> levi, <span class="code-keyword">int</span> desni) {<br>    <span class="code-keyword">if</span>(levi > desni) <span class="code-keyword">return</span> -1; <span class="code-comment">// број није надјен у низу</span><br>    <span class="code-keyword">int</span> sredina = (levi + desni) / 2;<br>    <span class="code-keyword">if</span>(broj < niz[sredina]) <span class="code-keyword">return</span> TraziBroj(niz, broj, levi,sredina-1);<br>    <span class="code-keyword">else</span> <span class="code-keyword">if</span>(broj > niz[sredina]) <span class="code-keyword">return</span> ____________________;<br>    <span class="code-keyword">else</span> <span class="code-keyword">return</span> sredina;<br>}</code></pre><br>Заокружити број испред очекиваног одговора:',
        options: [
            'TraziBroj(niz, broj, sredina + 1, levi)',
            'TraziBroj(niz, broj, sredina - 1, levi)',
            'TraziBroj(niz, broj, desni, sredina + 1)',
            'TraziBroj(niz, broj, sredina + 1, desni)'
        ],
        correctAnswer: 3,
        points: 2
    },
    {
        id: 86,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Грешке',
        tags: ['C#', 'Програмирање', 'Грешке'],
        question: 'Дат је код програма у програмском језику C#. Анализирати дати код и проценити његову тачност. Заокружити број испред понуђеног тачног исказа:<br><pre><code><span class="code-keyword">namespace</span> TestPrimer {<br>    <span class="code-keyword">class</span> Test {<br>        <span class="code-keyword">int</span> x;<br>        <span class="code-keyword">public</span> Test(<span class="code-keyword">string</span> s){<br>            Console.WriteLine("Klasa Test");<br>        }<br>        <span class="code-keyword">static</span> <span class="code-keyword">void</span> Main(<span class="code-keyword">string</span>[] args){<br>            Test t = <span class="code-keyword">null</span>;<br>            Console.WriteLine(t.x);<br>        }<br>    }<br>}</code></pre><br>Заокружити број испред очекиваног тачног исказа:',
        options: [
            'Програм има грешку јер променљива x није иницијализована.',
            'Програм има грешку јер класа Test нема подразумевани конструктор.',
            'Програм има грешку јер се у некој класи не може декларисати променљива типа те исте класе, као што је то овде случај са променљивом t.',
            'Програм има грешку јер променљива t није иницијализована и има вредност null у моменту када се приказује поље t.x.',
            'Програм нема грешака и нормално се извршава, не приказујући ништа на екрану.'
        ],
        correctAnswer: 3,
        points: 2
    },
    {
        id: 87,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Чланови класе',
        tags: ['C#', 'Програмирање', 'Класе', 'Статички'],
        question: 'Дата је дефиниција класе у програмском језику C#. Проценити где у дефиницији класе (испред које методе) треба заменити знакове ??? службеном речју <span class="code-bold">static</span>.<br><pre><code><span class="code-keyword">public</span> <span class="code-keyword">class</span> Test {<br>    <span class="code-keyword">private</span> <span class="code-keyword">int</span> broj;<br><br>    <span class="code-keyword">public</span> ??? <span class="code-keyword">int</span> kvadrat(<span class="code-keyword">int</span> n) { <span class="code-keyword">return</span> n * n; }<br>    <span class="code-keyword">public</span> ??? <span class="code-keyword">int</span> getBroj() { <span class="code-keyword">return</span> broj; }<br>}</code></pre><br>Заокружити број испред тачне изјаве:',
        options: [
            'Метода kvadrat МОРА да буде статичка, док метода getBroj може и не мора.',
            'Обе методе морају бити статичке.',
            'Ни једна од дефинисаних метода није статичка.',
            'Метода getBroj НЕ СМЕ да буде статичка, док метода kvadrat може и не мора.'
        ],
        correctAnswer: 3,
        points: 2
    },
    {
        id: 88,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Конструктори',
        tags: ['C#', 'Програмирање', 'Класе', 'Конструктори', 'Копирање'],
        question: `Дата је дефиниција класе у програмском језику C# и састоји се од два конструктора, методе и поља x и y. У шестом реду написати конструктор копије објекта класе Point.<br><div class="question-code"><span class="code-keyword">public</span> <span class="code-keyword">class</span> Point {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">private</span> <span class="code-keyword">double</span> x, y;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">public</span> Point() { x = 0; y = 0; }<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">public</span> <span class="code-keyword">void</span> Set(<span class="code-keyword">double</span> xx, <span class="code-keyword">double</span> yy){ x=xx; y=yy; }<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">public</span> Point(Point p) { <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____________________ //Odgovor<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}</div><br>Заокружити број испред очекиваног одговора:`,
        options: [
            'this(p.x, p.y);',
            'this(p);',
            'Set(p);',
            'Set(p.x, p.y);'
        ],
        correctAnswer: 3,
        points: 2
    },
    {
        id: 89,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Објекти',
        tags: ['C#', 'Програмирање', 'Класе', 'Објекти', 'Методе', 'Equals'],
        question: `Дат је код програма у програмском језику C# којим су дефинисане две класе: <span class="code-keyword">class</span> Program која садржи Main(string[] args) методу и <span class="code-keyword">class</span> KlasaA. Анализирати дати код и одредити да ли је код исправно написан. Понуђени одговори дају опис последица извршавања овог кода.<br><div class="question-code"><span class="code-keyword">class</span> Program {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">public</span> <span class="code-keyword">static</span> <span class="code-keyword">void</span> Main(<span class="code-keyword">string</span>[] args) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KlasaA a1 = <span class="code-keyword">new</span> KlasaA ();<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KlasaA a2 = <span class="code-keyword">new</span> KlasaA ();<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(a1.Equals(a2));<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}<br><br><span class="code-keyword">class</span> KlasaA {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">int</span> x;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">public</span> <span class="code-keyword">bool</span> Equals(KlasaA a){<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> this.x == a.x;<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>}</div><br>Заокружити број испред тачног исказа:`,
        options: [
            'Програм има грешку, јер се изразом a1.Equals(a2) проверава једнакост објеката a1 и a2 различитог типа од Object.',
            'Програм има грешку, јер је једнакост објеката a1 и a2 типа KlasaA проверава изразом a1 == a2.',
            'Програм се извршава без грешке и приказује се true на екрану.',
            'Програм се извршава без грешке и приказује се false на екрану.'
        ],
        correctAnswer: 2,
        points: 2
    },
    {
        id: 90,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Објекти',
        tags: ['C#', 'Програмирање', 'Класе', 'Објекти', 'Методе', 'Equals'],
        question: 'Дат је код програма у програмском језику C# којим су дефинисане две класе: <span class="code-keyword">class</span> Program која садржи Main(string[] args) методу и <span class="code-keyword">class</span> KlasaA. Анализирати дати код и одредити да ли је код исправно написан. Понуђени одговори дају опис последица извршавања овог кода. Заокружити број испред тачног исказа:<br><pre><code><span class="code-keyword">class</span> Program {<br>    <span class="code-keyword">public</span> <span class="code-keyword">static</span> <span class="code-keyword">void</span> Main(<span class="code-keyword">string</span>[] args) {<br>        Object a1 = <span class="code-keyword">new</span> KlasaA();<br>        Object a2 = <span class="code-keyword">new</span> KlasaA();<br>        Console.WriteLine(a1.Equals(a2));<br>    }<br>}<br><br><span class="code-keyword">class</span> KlasaA {<br>    <span class="code-keyword">int</span> x;<br>    <span class="code-keyword">public</span> <span class="code-keyword">bool</span> Equals(KlasaA a){<br>        <span class="code-keyword">return</span> this.x == a.x;<br>    }<br>}</code></pre><br>Заокружити број испред тачног исказа:',
        options: [
            'Програм има грешку, јер се изразом a1.Equals(a2) проверава једнакост објеката a1 и a2 различитог типа од Object.',
            'Програм има грешку, јер је једнакост објеката a1 и a2 типа KlasaA проверава изразом a1 == a2.',
            'Програм се извршава без грешке и приказује се true на екрану.',
            'Програм се извршава без грешке и приказује се false на екрану.'
        ],
        correctAnswer: 3,
        points: 2
    },
    {
        id: 91,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Наслеђивање',
        tags: ['C#', 'Програмирање', 'Класе', 'Наслеђивање', 'Методе', 'Преоптерећење'],
        question: 'Дат је код програма у програмском језику C# у ком су дефинисане три класе: <span class="code-keyword">class</span> Program која садржи Main(string[] args) методу, <span class="code-keyword">class</span> A и <span class="code-keyword">class</span> B. Анализирати дати код и одредити да ли је код исправно написан. Заокружити број испред исказа који даје информацију о тачности кода.<br><pre><code><span class="code-keyword">class</span> Program {<br>    <span class="code-keyword">public</span> <span class="code-keyword">static</span> <span class="code-keyword">void</span> Main(<span class="code-keyword">string</span>[] args) {<br>        B b = <span class="code-keyword">new</span> B();<br>        b.Metod(5);<br>        Console.WriteLine("b.i je " + b.CitajI());<br>    }<br>}<br><br><span class="code-keyword">class</span> A {<br>    <span class="code-keyword">int</span> i;<br>    <span class="code-keyword">public</span> <span class="code-keyword">int</span> CitajI() { <span class="code-keyword">return</span> i; }<br>    <span class="code-keyword">public</span> <span class="code-keyword">void</span> Metod(<span class="code-keyword">int</span> i) { this.i = i; }<br>}<br><br><span class="code-keyword">class</span> B : A {<br>    <span class="code-keyword">public</span> <span class="code-keyword">void</span> Metod(<span class="code-keyword">string</span> s) {<br>        Console.WriteLine(s);<br>    }<br>}</code></pre><br>Заокружити број испред исказа који даје информацију о тачности кода:',
        options: [
            'Програм има грешку, јер је метод Metod(int i) надјачан (предефинисан) са различитим потписом у класи B.',
            'Програм има грешку, јер се b.Metod(5) не може позвати пошто је метод Metod(int i) заклоњен у класи B.',
            'Програм има грешку због b.i, јер је поље i неприступачно из класе B.',
            'Програм нема грешке, јер наслеђени метод класе А, Metod(int i) није надјачан у класи B, већ је дефинисан преоптерећен метод Metod(string s).'
        ],
        correctAnswer: 3,
        points: 2
    },
    {
        id: 92,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Изузеци',
        tags: ['C#', 'Програмирање', 'Изузеци', 'try-catch'],
        question: 'Дат је део кода који је написан на C# програмском језику. Анализирати код и одредити шта ће се приказати на излазу.<br><pre><code><span class="code-keyword">try</span><br>{<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">int</span> x = 0;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">int</span> y = 5 / x;<br>}<br><span class="code-keyword">catch</span> (Exception e)<br>{<br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(\"Exception\");<br>}<br><span class="code-keyword">catch</span> (ArithmeticException ae)<br>{<br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(\" Arithmetic Exception\");<br>}<br>Console.WriteLine(\"finished\");</code></pre><br>Заокружити број испред тачног одговора:',
        options: [
            'Приказује се текст: finished',
            'Приказује се текст: Exception',
            'Ништа. Дешава се грешка приликом компајлирања',
            'Приказује се текст: Arithmetic Exception'
        ],
        correctAnswer: 2,
        points: 2
    },
    {
        id: 93,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Изузеци',
        tags: ['C#', 'Програмирање', 'Изузеци', 'try-catch'],
        question: 'Заокружити број испред исказа који представља исправан наставак дате реченице:<br>Ако try-catch наредба има више catch блокова у којима "хватамо" изузетак основне <span class="code-keyword">Exception</span> класе, заједно са изузецима других класа изведених из класе Exceptions...',
        options: [
            'онда се изузетак основне Exception класе може „хватати\" у било ком catch блоку (редослед није битан, битно је да се наведу све могуће грешке)',
            'онда се изузетак основне Exception класе мора „хватати\" у последњем catch блоку',
            'онда се изузетак основне Exception класе мора „хватати\" у првом catch блоку',
            'основна Exception класа се не комбинује у истој наредби са класама изведеним из ње јер их основна класа „маскира\"'
        ],
        correctAnswer: 1,
        points: 2
    },
    {
        id: 94,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Изузеци',
        tags: ['C#', 'Програмирање', 'Изузеци', 'try-catch-finally'],
        question: 'Дати су искази који се односе на правила писања try-catch-finally блокова за руковање изузетима. Заокружити бројеве испред исказа који су тачни:',
        options: [
            'Блок try мора имати бар један catch или један finally блок',
            'Блок try може имати више catch блокова',
            'Ако блок try има више catch блокова, изузетак основне Exception класе мора се хватати у првом catch блоку',
            'Ако блок try има више catch блокова, битан је редослед њиховог писања',
            'Блок try мора имати бар један finally блок',
            'Блок try не сме да има више catch блокова'
        ],
        correctAnswer: [0, 1, 3],
        points: 1.5
    },
    {
        id: 95,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Наслеђивање',
        tags: ['C#', 'Програмирање', 'Наслеђивање', 'Методе', 'редефинисање'],
        question: 'Да би наслеђени метод могао да се <span class="code-keyword">редефинише</span> и тиме измени његова функционалност у класама наследницама, у родитељској класи испред ознаке повратног типа метода наводи се нека од понуђених кључних речи.',
        options: [
            'new',
            'virtual',
            'sealed',
            'override',
            'abstract',
            'base',
            'довољно је да буде public или protected'
        ],
        correctAnswer: [1, 4, 6],
        points: 1.5
    },
    {
        id: 96,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Низови',
        tags: ['C#', 'Програмирање', 'Низови', 'декларација'],
        question: 'Дата је наредба кода у програмском језику C# koja predstavlja deklaraciju niza. Проценити koje od dole navedenih deklaracija su tačne.<br>Заокружити brojeve ispred očekivanih odgovora:',
        options: [
            '1. <span class="code-keyword">int</span> niz = new int(30);',
            '2. <span class="code-keyword">double</span>[] niz = new double[30];',
            '3. <span class="code-keyword">int</span>[] niz = {3, 4, 3, 2};',
            '4. <span class="code-keyword">char</span>[] niz = new char {\'a\', \'b\', \'c\', \'d\'};',
            '5. <span class="code-keyword">char</span>[] niz = new char[] {\'a\', \'b\'};',
            '6. <span class="code-keyword">char</span>[] niz = new char[] {\'a\', \'b\'};'
        ],
        correctAnswer: [1, 2, 5],
        points: 1.5
    },
    {
        id: 97,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Наслеђивање',
        tags: ['C#', 'Програмирање', 'Наслеђивање', 'Класификатори'],
        question: 'Дат је код на C#-у којим су креиране три класе у ланцу наслеђивања. Имајући у виду класификаторе приступа пољима класа, заокружити бројеве испред поља која ће бити видљива унутар класе Sin:<br><pre><code><span class="code-keyword">public</span> <span class="code-keyword">class</span> Deda {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">private</span> <span class="code-keyword">double</span> penzija;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">protected</span> <span class="code-keyword">string</span> adresa;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">public</span> <span class="code-keyword">string</span> ime;<br>}<br><br><span class="code-keyword">public</span> <span class="code-keyword">class</span> Otac: Deda {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">private</span> <span class="code-keyword">double</span> plata;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">protected</span> <span class="code-keyword">string</span> struka;<br>}<br><br><span class="code-keyword">public</span> <span class="code-keyword">class</span> Sin: Deda {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">public</span> <span class="code-keyword">int</span> razred;<br>}</code></pre>',
        options: [
            '1. penzija',
            '2. adresa',
            '3. ime',
            '4. plata',
            '5. struka',
            '6. razred'
        ],
        correctAnswer: [1, 2, 5],
        points: 1.5
    },
    {
        id: 98,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Наслеђивање',
        tags: ['C#', 'Програмирање', 'Наслеђивање', 'Класификатори'],
        question: 'Дат је код на C#-у којим су креиране три класе у ланцу наслеђивања. Унутар сваке класе декларисан је по један private, public и protected атрибут. У методи Main() класе <span class="code-keyword">Program</span> креиран је објекат s класе <span class="code-keyword">Sin</span> (<span class="code-keyword">Sin</span> s = new Sin()). Заокружити бројеве испред поља која ће бити видљива у креираном објекту s класе Sin:<br><pre><code><span class="code-keyword">public</span> <span class="code-keyword">class</span> Deda {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">private</span> <span class="code-keyword">double</span> penzija;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">protected</span> <span class="code-keyword">string</span> adresa;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">public</span> <span class="code-keyword">string</span> ime;<br>}<br><br><span class="code-keyword">public</span> <span class="code-keyword">class</span> Otac: Deda {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">private</span> <span class="code-keyword">double</span> plata;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">protected</span> <span class="code-keyword">string</span> firma;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">public</span> <span class="code-keyword">string</span> struka;<br>}<br><br><span class="code-keyword">public</span> <span class="code-keyword">class</span> Sin: Otac {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">private</span> <span class="code-keyword">double</span> prosek;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">protected</span> <span class="code-keyword">int</span> razred;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">public</span> <span class="code-keyword">string</span> skola;<br>}</code></pre>',
        options: [
            '1. penzija',
            '2. adresa',
            '3. ime',
            '4. plata',
            '5. struka',
            '6. firma',
            '7. prosek',
            '8. razred',
            '9. skola'
        ],
        correctAnswer: [2, 4, 8],
        points: 1.5
    },
    {
        id: 99,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Конструктори',
        tags: ['C#', 'Програмирање', 'Класе', 'Конструктори'],
        question: 'Дата је дефиниција класе у програмском језику C# и састоји се од два конструктора, метода и поља x и y. У методу реду дефинисан је конструктор са параметрима који формира тачку са координатама x и y. Заокружити наредба којима се тачно допунити дефиниција конструктора:<br><pre><code>1. <span class="code-keyword">public</span> <span class="code-keyword">class</span> Point {<br>2. &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">private</span> <span class="code-keyword">double</span> x, y;<br>3. &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">public</span> Point() { x = 0; y = 0; }<br>4. &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">public</span> <span class="code-keyword">void</span> Set(<span class="code-keyword">double</span> xx, <span class="code-keyword">double</span> yy) { x = xx; y = yy; }<br>5. &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">public</span> Point(<span class="code-keyword">double</span> x, <span class="code-keyword">double</span> y) { ___________ ; }<br>6. }</code></pre><br>Заокружити бројеве испред тачних одговора:',
        options: [
            '1. this.x=x; this.y=y;',
            '2. x=x; y=y;',
            '3. set(x,y);',
            '4. set(this.x,this.y);',
            '5. x=this.x; y=this.y;'
        ],
        correctAnswer: [0, 2],
        points: 2
    },
    {
        id: 100,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Низови',
        tags: ['C#', 'Програмирање', 'Низови', 'Петље'],
        question: 'Дати су делови кода у програмском језику C# који треба да рачунају збир елемената матрице а, декларисане на следећи начин: <span class="code-keyword">int</span>[,] a = new int[10, 10]. Анализирати дате кодове и проценити који од предлога је тачан.<br>Заокружити бројеве испред очекиваних одговора:',
        options: [
            '1. <span class="code-keyword">int</span> sum = 0;<br><span class="code-keyword">for</span> (<span class="code-keyword">int</span> i = 0; i &lt; b.Length; i++) <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">for</span> (<span class="code-keyword">int</span> j = 0; j &lt; b[i].Length; j++) <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum3 += b[i][j];',
            '2. <span class="code-keyword">int</span> sum = 0;<br><span class="code-keyword">foreach</span> (<span class="code-keyword">int</span> x <span class="code-keyword">in</span> a) sum1 += x;',
            '3. <span class="code-keyword">int</span> sum = 0;<br><span class="code-keyword">for</span> (<span class="code-keyword">int</span> i = 0; i &lt; a.GetLength(0); i++) <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">for</span>(<span class="code-keyword">int</span> j=0; j&lt;a.GetLength(1); j++) <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum2 += a[i,j];',
            '4. <span class="code-keyword">int</span> sum = 0;<br><span class="code-keyword">foreach</span> (<span class="code-keyword">int</span>[] vrsta <span class="code-keyword">in</span> b) <br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">foreach</span> (<span class="code-keyword">int</span> el <span class="code-keyword">in</span> vrsta) <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum4 += el;'
        ],
        correctAnswer: [1, 2],
        points: 2
    },
    {
        id: 101,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Методе',
        tags: ['C#', 'Програмирање', 'Методе', 'params'],
        question: 'Дате су наредбе у програмском језику C# које дефинишу заглавље методе Print() са променљивим бројем параметара. Одредити који од понуђених одговора су исправни.',
        options: [
            '1. <span class="code-keyword">public</span> <span class="code-keyword">void</span> Print (<span class="code-keyword">params</span> <span class="code-keyword">string</span>[] niska, <span class="code-keyword">params</span> <span class="code-keyword">double</span>[] broj)',
            '2. <span class="code-keyword">public</span> <span class="code-keyword">void</span> Print (<span class="code-keyword">params</span> <span class="code-keyword">double</span>[] broj, <span class="code-keyword">string</span> niska)',
            '3. <span class="code-keyword">public</span> <span class="code-keyword">void</span> Print (<span class="code-keyword">params</span> <span class="code-keyword">double</span> d1, <span class="code-keyword">double</span> d2)',
            '4. <span class="code-keyword">public</span> <span class="code-keyword">void</span> Print (<span class="code-keyword">params</span> <span class="code-keyword">double</span>[] broj)',
            '5. <span class="code-keyword">public</span> <span class="code-keyword">void</span> Print (<span class="code-keyword">int</span> n, <span class="code-keyword">params</span> <span class="code-keyword">double</span>[] broj)'
        ],
        correctAnswer: [3, 4],
        points: 2
    },
    {
        id: 102,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Конструктори',
        tags: ['C#', 'Програмирање', 'Конструктори'],
        question: 'Дата је дефиниција класе у програмском језику C# и састоји се од два конструктора, једне методе и поља x. У дефиницији се користи службена реч this. Анализирати дати код и проценити тачност следећих исказа. Заокружити бројеве испред тачних исказа:<br><br><span class="code-keyword">class</span> TestPrimer {<br>&nbsp;&nbsp;<span class="code-keyword">public</span> <span class="code-keyword">double</span> x;<br>&nbsp;&nbsp;<span class="code-keyword">public</span> TestPrimer(<span class="code-keyword">double</span> x){<br>&nbsp;&nbsp;&nbsp;&nbsp;this.fun();<br>&nbsp;&nbsp;&nbsp;&nbsp;this.x = x;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;<span class="code-keyword">public</span> TestPrimer(){<br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine("Podrazumevani konstruktor");<br>&nbsp;&nbsp;&nbsp;&nbsp;this(23);<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;<span class="code-keyword">public</span> <span class="code-keyword">void</span> Fun(){<br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine("Poziv metoda fun()");<br>&nbsp;&nbsp;}<br>}',
        options: [
            '1. this.Fun() у конструктору TestPrimer(double x) може се поједноставити и заменити само са Fun().',
            '2. this.x у конструктору TestPrimer(double x) може се поједноставити и заменити само са x.',
            '3. позив конструктора this(23) унутар другог конструктора TestPrimer() је прво што се извршава и мора се писати одмах после декларације public TestPrimer():this(23)',
            '4. this(23) у конструктору Test() мора се заменити са прецизнијим изразом this(23.0).'
        ],
        correctAnswer: [0, 2],
        points: 2
    },
    {
        id: 103,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Конструктори',
        tags: ['C#', 'Програмирање', 'Конструктори'],
        question: 'Дати су искази који у програмском језику C# дефинишу конструктор. Заокружити бројеве испред очекиваних одговора:',
        options: [
            '1. Подразумевани конструктор без параметара се увек аутоматски додаје класи.',
            '2. Подразумевани конструктор без параметара се класи аутоматски додаје уколико у њој није експлицитно дефинисан ниједан конструктор.',
            '3. У класи се мора експлицитно дефинисати бар један конструктор.',
            '4. Конструктори немају тип резултата, чак ни void.'
        ],
        correctAnswer: [1, 3],
        points: 2
    },
    {
        id: 104,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Конструктори',
        tags: ['C#', 'Програмирање', 'Конструктори', 'Наслеђивање'],
        question: 'Заокружити бројеве испред исказа наведених чланова класе који се ни под којим условима НЕ наслеђују од родитељске класе на изведену класу:',
        options: [
            '1. Readonly својства',
            '2. Својства (property) класе',
            '3. Заштићени чланови класе',
            '4. Приватни чланови класе',
            '5. Конструктор класе'
        ],
        correctAnswer: [4],
        points: 2
    },
    {
        id: 105,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Класе и ToString()',
        tags: ['C#', 'Програмирање', 'Класе', 'ToString'],
        question: 'Дат је код програма у програмском језику C#. Код садржи објекте две класе у којима је дефинисан метод ToString(). Анализирати код датог програма и одредити који од датих исказа су тачни.<br><br><span class="code-keyword">namespace</span> TestPrimer {<br>&nbsp;&nbsp;<span class="code-keyword">class</span> Program {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">static void</span> Main(<span class="code-keyword">string</span>[] args) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Object a = <span class="code-keyword">new</span> Klasa();<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Object obj = <span class="code-keyword">new</span> Object();<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(a);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(obj);<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;}<br>}<br><span class="code-keyword">class</span> Klasa{<br>&nbsp;&nbsp;<span class="code-keyword">int</span> x;<br>&nbsp;&nbsp;<span class="code-keyword">public override string</span> ToString() {<span class="code-keyword">return</span> "x u A je " + x;}<br>}',
        options: [
            '1. Програм има грешку, јер наредбу Console.WriteLine(a) треба заменити наредбом Console.WriteLine(a.ToString()).',
            '2. Приликом извршавања наредбе Console.WriteLine(a), програм позива се метод ToString() наслеђен из класе Object.',
            '3. Приликом извршавања наредбе Console.WriteLine(a), програм позива метод ToString() из класе Klasa.',
            '4. Приликом извршавања наредбе Console.WriteLine(obj), програм позива метод ToString() из класе Object.'
        ],
        correctAnswer: [2, 3],
        points: 2
    },
    {
        id: 106,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Класе и конструктори',
        tags: ['C#', 'Програмирање', 'Класе', 'Конструктори', 'Наслеђивање'],
        question: 'У програмском језику C# дата је декларација две класе: KlasaA и KlasaB која наслеђује класу KlasaA. Анализирати дате класе и проценити који од понуђених исказа су тачни.<br><br><span class="code-keyword">namespace</span> TestPrimer {<br>&nbsp;&nbsp;<span class="code-keyword">class</span> Program {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">static void</span> Main(<span class="code-keyword">string</span>[] args) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KlasaB b = <span class="code-keyword">new</span> KlasaB();<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b.Print();<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;<span class="code-keyword">class</span> KlasaA {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">string</span> s;<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">public</span> KlasaA(<span class="code-keyword">string</span> s) { this.s = s; }<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">public void</span> Print() { Console.WriteLine(this.s); }<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;<span class="code-keyword">class</span> KlasaB :KlasaA{ }<br>}',
        options: [
            '1. Програм има грешку, јер KlasaB нема подразумевани конструктор KlasaB().',
            '2. Програм има грешку јер KlasaB има подразумевани конструктор, док родитељска KlasaA нема такав конструктор. Програм би радио без грешке уколико би се уклонио конструктор са параметрима из KlasaA.',
            '3. Програм има грешку која се може отклонити уколико би се у KlasaA експлицитно додао конструктор без параметара KlasaA().',
            '4. Програм нема грешку, извршава се, али се на конзоли ништа не исписује јер је поље s добило подразумевану вредност String.Empty'
        ],
        correctAnswer: [1, 2],
        points: 2
    },
    {
        id: 107,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Конструктори',
        tags: ['C#', 'Програмирање', 'Конструктори'],
        question: 'У класи Figura дат је подразумевани (default) конструктор и конструктор са 4 параметра:<br><span class="code-keyword">public</span> Figura() {...}<br><span class="code-keyword">public</span> Figura(<span class="code-keyword">string</span> ime, <span class="code-keyword">string</span> boja, <span class="code-keyword">int</span> pozX, <span class="code-keyword">int</span> pozY) {...}<br>Заокружити бројеве испред исправно написаних наредби креирања објеката класе Figura:',
        options: [
            '1. Figura f = Figura("lovac", "beli", 7, 3);',
            '2. Figura f = new Figura("beli", "lovac", 7, 3);',
            '3. Figura f = new Figura();',
            '4. Figura f = new Figura("lovac", 3, 7, "beli");',
            '5. Figura f = new Figura("lovac", "beli", 3, 7);',
            '6. Figura f = new Figura("lovac", "beli", 3);'
        ],
        correctAnswer: [1, 2, 4],
        points: 3
    },
    {
        id: 108,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Изузеци',
        tags: ['C#', 'Програмирање', 'Изузеци', 'try-catch-finally'],
        question: `Дате су започете изјаве које се односе на делове кода за обраду изузетака. Довршити започете реченице:<br><br>
        Наредбе које се извршавају у случају настанка грешке стављају се унутар блока <input type="text" class="fill-in-input" data-correct="catch"><span class="fill-in-indicator"></span><br>
        Наредбе које се извршавају и ако дође и ако не дође до грешке стављају се унутар блока <input type="text" class="fill-in-input" data-correct="finally"><span class="fill-in-indicator"></span><br>
        Наредбе које могу узазвати грешку стављају се унутар блока <input type="text" class="fill-in-input" data-correct="try"><span class="fill-in-indicator"></span>`,
        options: [],
        correctAnswer: ["catch", "finally", "try"],
        points: 1.5,
        type: 'fill-in'
    },
    {
        id: 109,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Наслеђивање и override',
        tags: ['C#', 'Програмирање', 'Наслеђивање', 'override'],
        question: `На програмском језику C# дефинисане су две класе:<br>
    <pre><code class="language-cs">
    public class Racun {
        public virtual int Uvecaj() { return 10; }
    }
    public class Dinarski : Racun {
        public override int Uvecaj() { return 20 * base.Uvecaj(); }
    }
    public class Devizni : Racun {
        public override int Uvecaj() { return 50 + base.Uvecaj(); }
    }
    </code></pre>
    Унутар функције Main, креирају се три објекта ових класа на следећи начин:<br>
    <pre><code class="language-cs">
    Racun r = new Racun();
    Racun rDin = new Dinarski();
    Racun rDev = new Devizni();
    </code></pre>
    Анализирати код и на предвиђене линије уписати шта метод Uvecaj() враћа при позиву из наведених објеката:<br>
    r.Uvecaj(); <input type="text" class="fill-in-input" data-correct="10"><span class="fill-in-indicator"></span><br>
    rDin.Uvecaj(); <input type="text" class="fill-in-input" data-correct="200"><span class="fill-in-indicator"></span><br>
    rDev.Uvecaj(); <input type="text" class="fill-in-input" data-correct="60"><span class="fill-in-indicator"></span>`,
        options: [],
        correctAnswer: ["10", "200", "60"],
        points: 3,
        type: 'fill-in'
    },
    {
        id: 110,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Наслеђивање и override',
        tags: ['C#', 'Програмирање', 'Наслеђивање', 'override'],
        question: `На програмском језику C# дефинисане су две класе:<br>
    <pre><code class="language-cs">
    public class Racun {
        public virtual int Uvecaj() { return 10; }
    }
    public class Dinarski : Racun {
        public override int Uvecaj() { return 20 * base.Uvecaj(); }
    }
    public class Devizni : Racun {
        public override int Uvecaj() { return 50 + base.Uvecaj(); }
    }
    </code></pre>
    Унутар функције Main, креирају се три објекта ових класа на следећи начин:<br>
    <pre><code class="language-cs">
    Racun r = new Racun();
    Racun rDin = new Dinarski();
    Racun rDev = new Devizni();
    </code></pre>
    Анализирати код и на предвиђене линије уписати шта метод Uvecaj() враћа при позиву из наведених објеката:<br>
    r.Uvecaj(); <input type="text" class="fill-in-input" data-correct="10"><span class="fill-in-indicator"></span><br>
    rDin.Uvecaj(); <input type="text" class="fill-in-input" data-correct="200"><span class="fill-in-indicator"></span><br>
    rDev.Uvecaj(); <input type="text" class="fill-in-input" data-correct="250"><span class="fill-in-indicator"></span>`,
        options: [],
        correctAnswer: ["10", "200", "250"],
        points: 3,
        type: 'fill-in'
    },
    {
        id: 111,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Наслеђивање и override',
        tags: ['C#', 'Програмирање', 'Наслеђивање', 'override'],
        question: `На програмском језику C# дефинисане су две класе:<br>
    <pre><code class="language-cs">
    public class KlasaA {
        public virtual int Metod() { return 10; }
    }
    public class KlasaB : KlasaA {
        public override int Metod() { return 20; }
    }
    public class KlasaC : KlasaB {
        public new int Metod() { return 30; }
    }
    </code></pre>
    Креирани су објекти ових класа и из њих позвана метода Metod(). На предвиђене линије уписати шта метод Metod() враћа при позиву из наведених објеката:<br>
    KlasaA a = new KlasaA(); a.Metod() враћа вредност <input type="text" class="fill-in-input" data-correct="10"><span class="fill-in-indicator"></span><br>
    KlasaB b = new KlasaB(); b.Metod() враћа вредност <input type="text" class="fill-in-input" data-correct="20"><span class="fill-in-indicator"></span><br>
    KlasaA bb = new KlasaB(); bb.Metod() враћа вредност <input type="text" class="fill-in-input" data-correct="20"><span class="fill-in-indicator"></span><br>
    KlasaC c = new KlasaC(); c.Metod() враћа вредност <input type="text" class="fill-in-input" data-correct="30"><span class="fill-in-indicator"></span><br>
    KlasaB cc = new KlasaC(); cc.Metod() враћа вредност <input type="text" class="fill-in-input" data-correct="20"><span class="fill-in-indicator"></span><br>
    KlasaA ccc = new KlasaC(); ccc.Metod() враћа вредност <input type="text" class="fill-in-input" data-correct="20"><span class="fill-in-indicator"></span>`,
        options: [],
        correctAnswer: ["10", "20", "20", "30", "20", "20"],
        points: 3,
        type: 'fill-in'
    },
    {
        id: 112,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Наслеђивање и override',
        tags: ['C#', 'Програмирање', 'Наслеђивање', 'override'],
        question: `На програмском језику C# дефинисане су две класе:<br>
    <pre><code class="language-cs">
    public class Roditelj {
        public virtual void Poruka1() { Console.WriteLine("R1"); }
        public void Poruka2() { Console.WriteLine("R2"); }
    }
    public class Dete : Roditelj {
        public override void Poruka1() { Console.WriteLine("D1"); }
        public new void Poruka2() { Console.WriteLine("D2"); }
    }
    </code></pre>
    Унутар функције Main креирана су два објекта ових класа на следећи начин:<br>
    <pre><code class="language-cs">
    Dete x = new Dete();
    Roditelj y = new Dete();
    </code></pre>
    Анализирати код и након извршавања наведених позива на предвиђене линије уписати шта ће се видети на стандардном излазу извршених позваних метода:<br>
    x.Poruka1(); <input type="text" class="fill-in-input" data-correct="D1"><span class="fill-in-indicator"></span><br>
    x.Poruka2(); <input type="text" class="fill-in-input" data-correct="D2"><span class="fill-in-indicator"></span><br>
    y.Poruka1(); <input type="text" class="fill-in-input" data-correct="D1"><span class="fill-in-indicator"></span><br>
    y.Poruka2(); <input type="text" class="fill-in-input" data-correct="R2"><span class="fill-in-indicator"></span>`,
        options: [],
        correctAnswer: ["D1", "D2", "D1", "R2"],
        points: 4,
        type: 'fill-in'
    },
    {
        id: 113,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Класе и типови',
        tags: ['C#', 'Програмирање', 'Класе', 'Типови', 'matching'],
        question: `Са леве стране дате су кључне речи које одређују типове класа, а са десне су описи класа. На линију испред описа уписати редни број под којим је наведен одговарајући тип класе:<br>
    <table>
    <tr><td>1. abstract</td><td><input class='fill-in-input' size='1' data-correct='3'> Класа која се простире у више фајлова</td></tr>
    <tr><td>2. sealed</td><td><input class='fill-in-input' size='1' data-correct='4'> Класа садржи само декларације метода, али не и дефиницију (тело) методе</td></tr>
    <tr><td>3. partial</td><td><input class='fill-in-input' size='1' data-correct='1'> Класа која се не може инстанцирати</td></tr>
    <tr><td>4. interface</td><td><input class='fill-in-input' size='1' data-correct='2'> Класа из које се не може наслеђивати</td></tr>
    </table>`,
        options: [],
        correctAnswer: ["3", "4", "1", "2"],
        points: 2,
        type: 'fill-in'
    },
    {
        id: 114,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Класе и приступ',
        tags: ['C#', 'Програмирање', 'Класе', 'Приступ', 'matching'],
        question: `Са десне стране су наведене су области видљивости појединих елемената класе, а са леве стране класификатори приступа којима се врши потпуна област видљивости. На линију испред описа области видљивости унети редни број под којим је наведен одговарајући класификатор приступа:<br>
    <table>
    <tr><td>1. private</td><td><input class='fill-in-input' size='1' data-correct='3'> видљив унутар класе у којој је дефинисан, као и унутар изведених класа</td></tr>
    <tr><td>2. public</td><td><input class='fill-in-input' size='1' data-correct='1'> видљив само унутар класе у којој је дефинисан</td></tr>
    <tr><td>3. protected</td><td><input class='fill-in-input' size='1' data-correct='4'> видљив унутар пројекта у коме је дефинисан</td></tr>
    <tr><td>4. internal</td><td><input class='fill-in-input' size='1' data-correct='2'> видљив и ван своје класе у којој је дефинисан</td></tr>
    </table>`,
        options: [],
        correctAnswer: ["3", "1", "4", "2"],
        points: 2,
        type: 'fill-in'
    },
    {
        id: 115,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C#',
        lecture: 'Класе и елементи',
        tags: ['C#', 'Програмирање', 'Класе', 'matching'],
        question: `Са леве стране су наведени делови/елементи класе, а са десне стране улоге појединих класних елемената. На линију испред описа улоге унети редни број под којим је наведен одговарајући елемент класе:<br>
    <table>
    <tr><td>1. поље (атрибут)</td><td><input class='fill-in-input' size='1' data-correct='4'> Опис функционалности објекта класе</td></tr>
    <tr><td>2. деструктор</td><td><input class='fill-in-input' size='1' data-correct='5'> Контрола приступа пољима класе</td></tr>
    <tr><td>3. конструктор</td><td><input class='fill-in-input' size='1' data-correct='1'> Опис објекта класе</td></tr>
    <tr><td>4. метода</td><td><input class='fill-in-input' size='1' data-correct='3'> Креирање објекта класе</td></tr>
    <tr><td>5. својство / property</td><td><input class='fill-in-input' size='1' data-correct='2'> Уништавање објекта класе</td></tr>
    </table>`,
        options: [],
        correctAnswer: ["4", "5", "1", "3", "2"],
        points: 2.5,
        type: 'fill-in'
    },
    {
        id: 161,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'Основе веба',
        tags: ['web', 'osnove', 'definicija'],
        question: 'Заокружити број испред исказа који тачно дефинише појам веб сајта:<br>Заокружити број испред траженог одговора:',
        options: [
            '1. скуп протокола за отпремање и преузимање података са интернета, као и протоколи за комуникацију на интернету',
            '2. скуп веб-страница које могу да садрже текст, слике, видео снимке и други мултимедијални садржај састављен у једну целину',
            '3. веб сајт чини интернет прегледач - програм који се користи за читање хипертекст докумената',
            '4. интернет сервис (www) који омогућава корисницима размену докумената која се састоје од текста, слика и мултимедијалног компоненти'
        ],
        correctAnswer: 1,
        points: 1
    },
    {
        id: 162,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'Протоколи',
        tags: ['web', 'http', 'protokoli'],
        question: 'Заокружити број испред тачног одговора.<br>Основни протокол који користи веб сервер је:',
        options: [
            '1. SMTP',
            '2. HTTP',
            '3. HTML',
            '4. WWW'
        ],
        correctAnswer: 1,
        points: 1
    },
    {
        id: 163,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'CSS',
        tags: ['web', 'css', 'osnove'],
        question: 'Заокружити број испред тачног одговора. Која је основна улога CSS-а (Cascading Style Sheet):',
        options: [
            '1. Дефинише структуру и садржај странице',
            '2. Дефинише конкретан изглед елемената странице',
            '3. Дефинише којим језиком веб сервер извршава динамичку веб страницу',
            '4. Дефинише протокол за приступ одређеној веб страници'
        ],
        correctAnswer: 1,
        points: 1
    },
    {
        id: 164,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'CSS селектори',
        tags: ['web', 'css', 'selektori'],
        question: 'Заокружити број испред тачног одговора.<br>Унутар HTML странице, CSS правила се креирају навођењем селектора елемента, својства и вредности. Како се дефинишу селектори HTML елемената?',
        options: [
            '1. Селектори се дефинишу искључиво на основу имена HTML елемента',
            '2. Селектори се дефинишу на основу имена елемента, назива класе или идентификатора елемента',
            '3. Селектори се дефинишу на основу атрибута сваког HTML елемента',
            '4. Селектори се дефинишу коришћењем кључне речи selector и атрибута'
        ],
        correctAnswer: 1,
        points: 1
    },
    {
        id: 165,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'CSS background',
        tags: ['web', 'css', 'background'],
        question: 'Заокружити број испред тачног одговора.<br>Дефинисан је стил елемента у оквиру кога се налази позадинска слика. Коју вредност својство <b>background-repeat</b> треба да има уколико слика не треба да се понавља у оквиру елемента:',
        options: [
            '1. background-repeat: fixed;',
            '2. background-repeat: null;',
            '3. background-repeat: no-repeat;',
            '4. background-repeat: repeat-x;'
        ],
        correctAnswer: 2,
        points: 1
    },
    {
        id: 166,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'CSS селектори',
        tags: ['web', 'css', 'selektori'],
        question: 'Заокружити број испред тачног одговора.<br>Селектором <b>a:visited</b> омогућава се стилизовање:',
        options: [
            '1. активног линка',
            '2. посећеног линка',
            '3. линка када се преко њега пређе мишем',
            '4. елемената са називом класе: a'
        ],
        correctAnswer: 1,
        points: 1
    },
    {
        id: 167,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'CSS својства',
        tags: ['web', 'css', 'z-index'],
        question: 'Заокружити број испред тачног одговора.<br>Које од понуђених својстава омогућава постављање ефекта слојевитости елемената у оквиру HTML стране?',
        options: [
            '1. Својство overlap',
            '2. Својство layer',
            '3. Својство z-index',
            '4. Не постоји решење за постављање слојевитости елемената HTML стране'
        ],
        correctAnswer: 2,
        points: 1
    },
    {
        id: 168,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'HTML тагови',
        tags: ['web', 'html', 'b', 'i'],
        question: 'Заокружити број испред тачног одговора.<br>Анализирати следећи HTML код и одабрати кода од понуђених опција описује резултат приказа HTML кода:<br><b><i> Maturски испит </i></b>',
        options: [
            '1. Текст ће бити само подебљан',
            '2. Текст ће бити само искошен',
            '3. Текст ће бити исписан подебљано и искошено',
            '4. Неће се применити никакав ефекат на текст'
        ],
        correctAnswer: 2,
        points: 1
    },
    {
        id: 169,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'CSS укључивање',
        tags: ['web', 'css', 'link'],
        question: 'Заокружити број испред линије кода којом се у HTML страницу укључује екстерна CSS датотека <b>style.css</b> са циљем дефинисања изгледа елемената дате странице:',
        options: [
            '1. &lt;style type="text/css"&gt;...&lt;/style&gt;',
            '2. &lt;link rel="stylesheet" type="text/css" href="style.css"/&gt;',
            '3. &lt;body style="background-color:red;"&gt;...&lt;/body&gt;',
            '4. &lt;a href="style.css"&gt;CSS датотека&lt;/a&gt;'
        ],
        correctAnswer: 1,
        points: 2
    },
    {
        id: 170,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'CSS укључивање',
        tags: ['web', 'css', 'external', 'internal', 'inline'],
        question: 'Заокружити број испред тачног одговора. Који је од наведених начина за укључивање CSS стила најпогоднији за стилизовање, а посебно за касније одржавање и ажурирање HTML странице:',
        options: [
            '1. Увежена екстерна CSS датотека преко хипервезе у заглављу HTML веб странице - External Style Sheet',
            '2. Дефинисан интерни CSS стил у оквиру head секције <style type="text/css">...</style> - Internal Style Sheet',
            '3. Дефинисан стил у оквиру елемента HTML стране - Inline style',
            '4. Не постоји решење за укључивање CSS стила у стилизовање HTML странице'
        ],
        correctAnswer: 0,
        points: 2
    },
    {
        id: 171,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'CSS селектори',
        tags: ['web', 'css', 'selektori'],
        question: `Заокружити број испред тачног одговора.<br>
    Дефинисан је HTML елемент:<br>
    <pre><code>&lt;div <span class="code-keyword">id</span>="container"&gt; Maturski ispit - EIT &lt;/div&gt;</code></pre><br>
    Које CSS правило дефинише стил за дати елемент:`,
        options: [
            `1. <pre><code>container {<br>&nbsp;&nbsp;<span class="code-keyword">font-size</span>: 1.5em;<br>}</code></pre>`,
            `2. <pre><code>#container {<br>&nbsp;&nbsp;<span class="code-keyword">font-size</span>: 1.5em;<br>}</code></pre>`,
            `3. <pre><code>.container {<br>&nbsp;&nbsp;<span class="code-keyword">font-size</span>: 1.5em;<br>}</code></pre>`,
            `4. <pre><code>selector container {<br>&nbsp;&nbsp;<span class="code-keyword">font-size</span>: 1.5em;<br>}</code></pre>`
        ],
        correctAnswer: 1,
        points: 2
    },
    {
        id: 172,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'HTML класе',
        tags: ['web', 'html', 'class'],
        question: `Заокружити број испред тачног одговора.<br>Уколико је стил једног DIV елемента дефинисан са три класе <b>blue</b>, <b>black</b> и <b>top</b>, заокружити линију кода којом је елемент исправно дефинисан у оквиру HTML стране:`,
        options: [
            '1. &lt;div id="blue black top"&gt;Maturски испит – ЕИТ&lt;/div&gt;',
            '2. &lt;div id="blue" class="black" class="top"&gt;Maturски испит – ЕИТ&lt;/div&gt;',
            '3. &lt;div class="blue" class="black" class="top"&gt;Maturски испит – ЕИТ&lt;/div&gt;',
            '4. &lt;div class="blue black top"&gt;Maturски испит – ЕИТ&lt;/div&gt;'
        ],
        correctAnswer: 3,
        points: 2
    },
    {
        id: 173,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'CSS background',
        tags: ['web', 'css', 'background'],
        question: `Заокружити број испред тачног одговора.<br>
    Дато је својство и додељена му је вредност:<br><br>
    <pre><code><span class="code-keyword">background-attachment</span>: <span class="code-keyword">fixed</span>;</code></pre><br>
    Закључити који од понуђених исказа описује дефинисани стил елемента са позадинском сликом:`,
        options: [
            '1. Позадинска слика се помера са остатком садржаја на страни',
            '2. Позадинска слика се не понавља у оквиру елемента',
            '3. Позадинска слика је непомична (фиксирана) у односу на остатак садржаја',
            '4. Позадинска слика се понавља унутар елемента'
        ],
        correctAnswer: [2],
        points: 2
    },
    {
        id: 174,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'CSS z-index',
        tags: ['web', 'css', 'z-index', 'pozadina'],
        question: `Заокружити број испред траженог одговора.<br>
    Дат је следећи код који стилизује три елемента странице различитим позадинским бојама:<br><br>
    <pre><code>&lt;div style="background-color:red;<br>&nbsp;&nbsp;width:300px;<br>&nbsp;&nbsp;height:100px;<br>&nbsp;&nbsp;position:relative;<br>&nbsp;&nbsp;top:10px;<br>&nbsp;&nbsp;left:80px;<br>&nbsp;&nbsp;z-index:2;"&gt;<br>&lt;/div&gt;<br><br>
    &lt;div style="background-color:yellow;<br>&nbsp;&nbsp;width:300px;<br>&nbsp;&nbsp;height:100px;<br>&nbsp;&nbsp;position:relative;<br>&nbsp;&nbsp;top:-60px;<br>&nbsp;&nbsp;left:35px;<br>&nbsp;&nbsp;z-index:1;"&gt;<br>&lt;/div&gt;<br><br>
    &lt;div style="background-color:green;<br>&nbsp;&nbsp;width:300px;<br>&nbsp;&nbsp;height:100px;<br>&nbsp;&nbsp;position:relative;<br>&nbsp;&nbsp;top:-220px;<br>&nbsp;&nbsp;left:120px;<br>&nbsp;&nbsp;z-index:3;"&gt;<br>&lt;/div&gt;</code></pre><br>
    Проценити шта од понуђеног описује ефекат извршења горњег кода:`,
        options: [
            '1. Слој са зеленом позадином је на врху и преклапа остале слојеве',
            '2. Слој са жутом позадином је на врху и преклапа остале слојеве',
            '3. Слој са црвеном позадином је на врху и преклапа остале слојеве',
            '4. Слојеви се утапају у једну боју – нијансу смеђе'
        ],
        correctAnswer: [0],
        points: 2
    },
    {
        id: 175,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'Интернет основе',
        tags: ['web', 'internet', 'osnove'],
        question: 'Заокружити тачне исказе. Интернет је:',
        options: [
            '1. Интернет је светски систем умрежених рачунарских мрежа',
            '2. Софтвер за преглед и приказ www страница се сматра Интернетом',
            '3. Подaци који „путују“ светском мрежом и скуп корисника заједно чине Интернет мрежу',
            '4. Интернет чини и/или хардверска компонента као и систем софтверских слојева који контролишу различите аспекте њене комуникационе инфраструктуре'
        ],
        correctAnswer: [0, 3],
        points: 2
    },
    {
        id: 176,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'Веб сервери',
        tags: ['web', 'server', 'IIS', 'Apache'],
        question: 'Заокружити бројеве испред тражених одговора.<br>Шта од наведеног представља скуп специјализованих програма са функцијом веб сервера:',
        options: [
            '1. Microsoft Internet Information Services',
            '2. Microsoft SQL Server',
            '3. Apache Web Server',
            '4. Microsoft NT Server'
        ],
        correctAnswer: [0, 2],
        points: 2
    },
    {
        id: 177,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'Динамичке веб странице',
        tags: ['web', 'динамичке странице', 'HTML', 'базе'],
        question: 'Међу понуђеним исказима заокружити оне које се односе на динамичке веб странице:',
        options: [
            '1. Могу приступити базама података',
            '2. Странице се састоје искључиво од HTML кода',
            '3. Динамичке странице се пишу у CSS језику',
            '4. Могу стати персонализован садржај појединачним корисницима',
            '5. Странице се извршавају на веб серверу, а резултат овог извршавања представља HTML код',
            '6. Ажурирање података на сајту је компликованије и спорије него код статичког сајта'
        ],
        correctAnswer: [0, 3, 4],
        points: 3
    },
    {
        id: 178,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'CSS укључивање',
        tags: ['web', 'css', 'укључивање'],
        question: 'Заокружити могуће начине укључивања CSS стила у оквиру HTML стране:',
        options: [
            '1. Увежена екстерна CSS датотека преко хипервезе у заглављу HTML веб странице - External Style Sheet',
            '2. Дефинисан екстерни CSS стил приказивања у прегледачу HTML страница – CSS plugin',
            '3. Дефинисан интерни CSS стил у оквиру head секције <style type="text/css">...</style> - Internal Style Sheet',
            '4. Дефинисан стил у оквиру елемента HTML стране - inline style',
            '5. Дефинисан стил на крају HTML стране изван head и body секције – Outline style',
            '6. Дефинисан CSS стил у оквиру секције body, унутар тагa <css></css>'
        ],
        correctAnswer: [0, 2, 3],
        points: 3
    },
    {
        id: 179,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'CSS укључивање',
        tags: ['web', 'css', 'external', 'link'],
        type: 'fill-in',
        question: `Написати линију кода којом се укључује екстерна CSS датотека <b>style.css</b> у оквиру заглавља веб странице <b>index.html</b> (датотеке style.css и index.html се налазе у истом директоријуму):<br><br>
    <input type="text" class="fill-in-input" style="width:350px;" data-correct='<link rel="stylesheet" href="style.css">' >`,
        options: [],
        correctAnswer: ['<link rel="stylesheet" href="style.css">'],
        points: 3
    },
    {
        id: 180,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'HTML тагови',
        tags: ['web', 'html', 'matching'],
        type: 'fill-in',
        question: `Повезати појмове према захтеву.<br>Са леве стране су дати нумерисани HTML тагови, а са десне су наведени индикатори. На линију уписати број којим се HTML таг повезује са одговарајућим индикатором који ће се видети на HTML страници:<br><br>
    <table style="border-collapse:separate; border-spacing:0 10px;">
    <tr><td>1. &lt;font color="#ff0003"&gt;</td><td><input class='fill-in-input' size='1' data-correct='3'> приказ наслова трећег нивоа</td></tr>
    <tr><td>2. &lt;b&gt;</td><td><input class='fill-in-input' size='1' data-correct='4'> приказ текста дате величине</td></tr>
    <tr><td>3. &lt;h3&gt;</td><td><input class='fill-in-input' size='1' data-correct='1'> приказ текста у боји</td></tr>
    <tr><td>4. &lt;font size=3&gt;</td><td><input class='fill-in-input' size='1' data-correct='2'> приказ подебљаног текста</td></tr>
    </table>`,
        options: [],
        correctAnswer: ['3', '4', '1', '2'],
        points: 1.5
    },
    {
        id: 181,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'HTML тагови',
        tags: ['web', 'html', 'matching'],
        type: 'fill-in',
        question: `Повезати појмове према захтеву.<br>Са леве стране су дати нумерисани HTML тагови, а са десне су наведени индикатори. На линију уписати број којим се HTML таг повезује са одговарајућим индикатором који ће се видети на HTML страници:<br><br>
    <table style="border-collapse:separate; border-spacing:0 10px;">
    <tr><td>1. &lt;ol&gt;</td><td><input class='fill-in-input' size='1' data-correct='2'> дефинисање елемента листе</td></tr>
    <tr><td>2. &lt;li&gt;</td><td><input class='fill-in-input' size='1' data-correct='3'> постављање позадинске боје</td></tr>
    <tr><td>3. &lt;body bgcolor="#ffff00"&gt;</td><td><input class='fill-in-input' size='1' data-correct='4'> постављање позадинске слике</td></tr>
    <tr><td>4. &lt;body background="0001.jpg"&gt;</td><td><input class='fill-in-input' size='1' data-correct='1'> дефинисање нумерисане листе</td></tr>
    </table>`,
        options: [],
        correctAnswer: ['2', '3', '4', '1'],
        points: 1.5
    },
    {
        id: 182,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'HTML тагови',
        tags: ['web', 'html', 'matching'],
        type: 'fill-in',
        question: `Повезати појмове према захтеву.<br>Са леве стране су дати нумерисани HTML тагови, а са десне су наведени индикатори. На линију уписати број којим се HTML таг повезује са одговарајућим индикатором који ће се видети на HTML страници:<br><br>
    <table style="border-collapse:separate; border-spacing:0 10px;">
    <tr><td>1. &lt;tr&gt;</td><td><input class='fill-in-input' size='1' data-correct='4'> Дефинисање хиперлинка</td></tr>
    <tr><td>2. &lt;td&gt;</td><td><input class='fill-in-input' size='1' data-correct='1'> Нови ред у ћелији</td></tr>
    <tr><td>3. &lt;img src="slika.jpg"&gt;</td><td><input class='fill-in-input' size='1' data-correct='2'> Нова ћелија у табели</td></tr>
    <tr><td>4. &lt;a href="index.html"&gt;</td><td><input class='fill-in-input' size='1' data-correct='3'> Уметање слике</td></tr>
    </table>`,
        options: [],
        correctAnswer: ['4', '1', '2', '3'],
        points: 1.5
    },
    {
        id: 183,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'Интернет сервиси',
        tags: ['web', 'internet', 'servisi', 'matching'],
        type: 'fill-in',
        question: `Са леве стране су дати интернет сервиси, а са десне стране су дефинисане операције које се извршавају помоћу тих сервиса.<br>На линију испред дефинисане операције написати број њему одговарајућег сервиса:<br><br>
    <table style="border-collapse:separate; border-spacing:0 10px;">
    <tr><td>1. E-mail</td><td><input class='fill-in-input' size='1' data-correct='4'> успостављање везе са удаљеним рачунаром и рад на њему</td></tr>
    <tr><td>2. FTP</td><td><input class='fill-in-input' size='1' data-correct='3'> приказ HTML веб страница</td></tr>
    <tr><td>3. WWW</td><td><input class='fill-in-input' size='1' data-correct='1'> слање електронске поште</td></tr>
    <tr><td>4. Telnet</td><td><input class='fill-in-input' size='1' data-correct='2'> пренос датотекa са удаљеног сервера</td></tr>
    </table>`,
        options: [],
        correctAnswer: ['4', '3', '1', '2'],
        points: 2
    },
    {
        id: 184,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'HTML форме',
        tags: ['web', 'html', 'forme', 'matching'],
        type: 'fill-in',
        question: `Повезати појмове према захтеву.<br>HTML документ може да прими податке од корисника помоћу форми (формулара).<br>Повежите дате тагове и атрибуте са њиховим дефиницијама:<br><br>
    <table style="border-collapse:separate; border-spacing:0 10px;">
    <tr><td>1. FORM</td><td><input class='fill-in-input' size='1' data-correct='3'> Дефинише где проследити податке са форме после предаје (submit) форме</td></tr>
    <tr><td>2. INPUT</td><td><input class='fill-in-input' size='1' data-correct='4'> Одређује начин на који се подаци са форме шаљу на дефинисано одредиште (може бити „post” или „get“)</td></tr>
    <tr><td>3. ACTION</td><td><input class='fill-in-input' size='1' data-correct='1'> Основни таг формулара са којим се креира формулар за унос података од стране корисника</td></tr>
    <tr><td>4. METHOD</td><td><input class='fill-in-input' size='1' data-correct='2'> Дефинише поље за унос податка унутар HTML форме.</td></tr>
    </table>`,
        options: [],
        correctAnswer: ['3', '4', '1', '2'],
        points: 2
    },
    {
        id: 185,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'HTML странице',
        tags: ['web', 'html', 'staticka stranica', 'redosled'],
        type: 'fill-in',
        question: `Направите редослед потребних корака за приказ статичке веб странице уносом редних бројева на линије испред описа корака, почев од броја 1 до броја 5.<br><br>
    <table style="border-collapse:separate; border-spacing:0 10px;">
    <tr><td><input class='fill-in-input' size='1' data-correct='4'> Веб сервер шаље пронађену страну клијенту - веб претраживачу.</td></tr>
    <tr><td><input class='fill-in-input' size='1' data-correct='2'> Корисник захтева да види веб страну (кликом на линк, укуцавањем адресе у адресну линију веб претраживача и слично)</td></tr>
    <tr><td><input class='fill-in-input' size='1' data-correct='1'> Аутор је креирао страну која се састоји од HTML кода и ставио је на веб сервер.</td></tr>
    <tr><td><input class='fill-in-input' size='1' data-correct='5'> Веб претраживач обрађује добијени HTML код и приказује кориснику уредно форматирану страницу са свим елементима (сликама, линковима, табелама, ...)</td></tr>
    <tr><td><input class='fill-in-input' size='1' data-correct='3'> Веб сервер проналази HTML страну коју је корисник захтевао</td></tr>
    </table>`,
        options: [],
        correctAnswer: ['4', '2', '1', '5', '3'],
        points: 3
    },
    {
        id: 186,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'Динамичке веб странице',
        tags: ['web', 'html', 'dinamicka stranica', 'redosled'],
        type: 'fill-in',
        question: `Одредите редослед потребних корака за приказ динамичке веб странице уносом редних бројева (почев од 1) на линије испред описа корака.<br><br>
    <table style="border-collapse:separate; border-spacing:0 10px;">
    <tr><td><input class='fill-in-input' size='1' data-correct='6'> Веб претраживач обрађује добијени HTML код и приказује кориснику страницу са свим елементима.</td></tr>
    <tr><td><input class='fill-in-input' size='1' data-correct='4'> Веб сервер извршава програмски код који је саставни део стране и креира HTML код.</td></tr>
    <tr><td><input class='fill-in-input' size='1' data-correct='2'> Корисник креира захтев за преглед динамичке веб стране. Захтев се прослеђује од клијента (веб претраживача) до веб сервера на коме се налази захтевана страна.</td></tr>
    <tr><td><input class='fill-in-input' size='1' data-correct='1'> Аутор је креирао страну која се састоји од серверских контрола и инструкција у неком програмском језику и ставио је на веб сервер.</td></tr>
    <tr><td><input class='fill-in-input' size='1' data-correct='3'> Веб сервер обрађује захтев корисника и проналази динамичку страну коју је корисник захтевао</td></tr>
    <tr><td><input class='fill-in-input' size='1' data-correct='5'> Веб сервер шаље преко Интернета генерисани HTML код веб претраживачу.</td></tr>
    </table>`,
        options: [],
        correctAnswer: ['6', '4', '2', '1', '3', '5'],
        points: 3
    },
    {
        id: 187,
        group: 'ВЕБ ДИЗАЈН',
        lecture: 'HTML структура',
        tags: ['web', 'html', 'struktura', 'redosled'],
        type: 'fill-in',
        question: `Уредите појмове према захтеву.<br>Дат је низ HTML наредби. Уписивањем редног броја на предвиђену линију (почев од броја 1 до броја 6) поређајте наредбе тачним редоследом HTML наредби у складу са основном структуром HTML странице:<br><br>
    <table style="border-collapse:separate; border-spacing:0 10px;">
    <tr><td><input class='fill-in-input' size='1' data-correct='5'> &lt;/body&gt;</td></tr>
    <tr><td><input class='fill-in-input' size='1' data-correct='2'> &lt;head&gt;</td></tr>
    <tr><td><input class='fill-in-input' size='1' data-correct='6'> &lt;/html&gt;</td></tr>
    <tr><td><input class='fill-in-input' size='1' data-correct='1'> &lt;html&gt;</td></tr>
    <tr><td><input class='fill-in-input' size='1' data-correct='3'> &lt;/head&gt;</td></tr>
    <tr><td><input class='fill-in-input' size='1' data-correct='4'> &lt;body&gt;</td></tr>
    </table>`,
        options: [],
        correctAnswer: ['5', '2', '6', '1', '3', '4'],
        points: 3
    },
    {
        id: 188,
        group: 'ВЕБ ПРОГРАМИРАЊЕ',
        lecture: 'DNS и основе',
        tags: ['web', 'dns', 'osnove'],
        question: 'Заокружити исказ који описује улогу Domain Name Server-а:',
        options: [
            '1. превођење имена домена у IP адресу',
            '2. хостовање веб сајта',
            '3. вршење функције главног чвора у локалној рачунарској мрежи',
            '4. приказ динамичких веб страница'
        ],
        correctAnswer: 0,
        points: 1
    },
    {
        id: 189,
        group: 'ВЕБ ПРОГРАМИРАЊЕ',
        lecture: 'Платформе за развој',
        tags: ['web', 'platforme', 'microsoft'],
        question: 'Једну од платформи за развој веб апликација развио је и Microsoft. Заокружити назив Microsoft-ове платформе за развој веб апликација:',
        options: [
            '1. HTML',
            '2. JSP',
            '3. PHP',
            '4. ASP.NET'
        ],
        correctAnswer: 3,
        points: 1
    },
    {
        id: 190,
        group: 'ВЕБ ПРОГРАМИРАЊЕ',
        lecture: 'ASP.NET MVC',
        tags: ['web', 'asp.net', 'mvc', 'razor'],
        question: 'ASP.NET MVC 3.0 долази са новом техником за дефинисање погледа (View Engine). Заокружити назив ове технике:',
        options: [
            '1. ASP.NET View Engine',
            '2. Salome',
            '3. Razor',
            '4. Default'
        ],
        correctAnswer: 2,
        points: 1
    },
    {
        id: 191,
        group: 'ВЕБ ПРОГРАМИРАЊЕ',
        lecture: 'ASP.NET MVC Razor',
        tags: ['web', 'asp.net', 'mvc', 'razor', 'komentari'],
        question: 'Заокружити од понуђених опција који симбол се користи за коментаре у ASP.NET MVC Razor синтакси:',
        options: [
            '1. //',
            '2. /* ... */',
            '3. <!-- ... -->',
            '4. @* ... *@'
        ],
        correctAnswer: 3,
        points: 1
    },
    {
        id: 192,
        group: 'ВЕБ ПРОГРАМИРАЊЕ',
        lecture: 'SOAP и скрипт језици',
        tags: ['web', 'soap', 'xml'],
        question: 'SOAP протокол (Simple Object Access protocol) који се користи за размену података између рачунара коришћењем веб сервиса, у основи користи један скрипт језик. Заокруживањем редног броја, обележити о ком језику се ради.',
        options: [
            '1. HTML',
            '2. CSS',
            '3. JavaScript',
            '4. XML'
        ],
        correctAnswer: 3,
        points: 1
    },
    {
        id: 193,
        group: 'ВЕБ ПРОГРАМИРАЊЕ',
        lecture: 'Proxy сервери',
        tags: ['web', 'proxy', 'server'],
        question: 'Заокружити исказ који дефинише улогу Proxy сервера:',
        options: [
            '1. Омогућава пренос датотека са удаљеног рачунара и ка удаљеном рачунару',
            '2. Побољшава перформансе конекције, филтрира захтеве и прослеђује их на прави сервер',
            '3. Пружа хостинг различитим медијским садржајима (Аудио, Видео)',
            '4. Хостује веб стране'
        ],
        correctAnswer: 1,
        points: 2
    },
    {
        id: 194,
        group: 'ВЕБ ПРОГРАМИРАЊЕ',
        lecture: 'JavaScript типови',
        tags: ['web', 'javascript', 'tipovi'],
        question: 'Заокружити исказ који допуњује опис понашања променљивих током извршавања програма написаног у језику JavaScript. Током извршавања апликације написане у JavaScript-у:',
        options: [
            '1. Није могуће мењати типове променљивих у току извршавања апликације',
            '2. Типови променљивих се могу мењати током извршавања програма',
            '3. Типови променљивих се обавезно мењају током извршавања апликације',
            '4. JavaScript не подржава типове променљивих'
        ],
        correctAnswer: 1,
        points: 2
    },
    {
        id: 195,
        group: 'ВЕБ ПРОГРАМИРАЊЕ',
        lecture: 'ASP.NET MVC',
        tags: ['web', 'asp.net', 'mvc', 'layout'],
        question: 'Дата је ASP.NET MVC апликација у којој је креирана нова мастер страница (master layout page) која се зове _Layout.WindowsPhone.cshtml. Ако желимо да укључимо нову мастер страницу на новом погледу (View) који сегмент кода треба да искористимо. Заокружити тачан одговор:',
        options: [
            '@Html.ActionLink("_Layout.WindowsPhone.cshtml");',
            'Layout = "~/views/Shared/_Layout.WindowsPhone.cshtml";',
            'Layout = "Layout.WindowsPhone.cshtml";',
            '@Html.Partial("_Layout.WindowsPhone.cshtml");'
        ],
        correctAnswer: 1,
        points: 2
    },
    {
        id: 196,
        group: 'ВЕБ ПРОГРАМИРАЊЕ',
        lecture: 'Сервисни типови',
        tags: ['web', 'wcf', 'rest', 'xml'],
        question: 'Заокружити један од понуђених типова сервиса који може бити хостован у конзолној или десктоп апликацији:',
        options: [
            '1. ASMX',
            '2. RESTful',
            '3. WCF',
            '4. XML'
        ],
        correctAnswer: 2,
        points: 2
    },
    {
        id: 197,
        group: 'ВЕБ ПРОГРАМИРАЊЕ',
        lecture: 'Скрипт језици',
        tags: ['web', 'skript', 'dinamicke strane'],
        question: 'Заокружите број испред назива скрипт језика за израду динамичких веб страница:',
        options: [
            '1. PHP',
            '2. jQuery',
            '3. ASP.NET',
            '4. JSP',
            '5. VBScript',
            '6. CSS',
            '7. HTML'
        ],
        correctAnswer: [0, 2, 3],
        points: 1.5
    },
    {
        id: 198,
        group: 'ВЕБ ПРОГРАМИРАЊЕ',
        lecture: 'JavaScript конверзије',
        tags: ['web', 'javascript', 'konverzija', 'string', 'broj'],
        question: 'У клијентском скрипт језику Java Script постоји неколико могућности конверзије стринга у број. Заокружити функције које омогућавају те конверзије:',
        options: [
            '1. Није могуће мењати типове променљивих у току извршавања апликације',
            '2. Функција EVAL - процењује стринг и ако је могуће претвара га у број',
            '3. Функција parseINT – конвертује стринг у целобројни број, ако је могуће',
            '4. Функција parseFLOAT – конвертује стринг у реалан број, ако је могуће',
            '5. Функција parseDOUBLE – конвертује стринг у реалан број, ако је могуће',
            '6. Функција tryParseINT – конвертује стринг у целобројни број, ако је могуће'
        ],
        correctAnswer: [1, 2, 3],
        points: 1.5
    },
    {
        id: 199,
        group: 'ВЕБ ПРОГРАМИРАЊЕ',
        lecture: 'WSDL',
        tags: ['web', 'wsdl', 'web servis'],
        question: 'Означити шта од наведеног је дефинисано WSDL језиком (Web Services Description Language) (заокружити више понуђених одговора):',
        options: [
            '1. Комуникациони интерфејс за веб сервис',
            '2. Начин имплементације метода веб сервиса',
            '3. Списак метода веб сервиса',
            '4. Комуникациони протокол за веб сервис'
        ],
        correctAnswer: [0, 1],
        points: 2
    },
    {
        id: 200,
        group: 'ВЕБ ПРОГРАМИРАЊЕ',
        lecture: '.NET Framework',
        tags: ['web', 'dotnet', 'framework', 'baze', 'xml'],
        question: 'Microsoft .NET Framework садржи базе класе које пружају широк спектар могућности. Заокружити елементе који су укључени у .NET Framework:',
        options: [
            '1. класе корисничког интерфејса',
            '2. класе за приступ подацима и базама',
            '3. класе корисника',
            '4. веб сервер и примере базе података',
            '5. класе за манипулацију XML документима',
            '6. скрипт језик који се извршава на клијент страни'
        ],
        correctAnswer: [0, 1, 4],
        points: 3
    },
    {
        id: 201,
        group: 'ВЕБ ПРОГРАМИРАЊЕ',
        lecture: 'MVC контролери',
        tags: ['web', 'mvc', 'controller', 'result'],
        question: 'Повратне вредности акције MVC контролера (controller action method) могу бити различитих типова. Заокружити бројеве испред могућих повратних вредности.',
        options: [
            '1. ViewResult',
            '2. MVCResult',
            '3. ModelResult',
            '4. JsonResult',
            '5. RedirectResult',
            '6. ASPResult'
        ],
        correctAnswer: [0, 3, 4],
        points: 2
    },
    {
        id: 202,
        group: 'ВЕБ ПРОГРАМИРАЊЕ',
        lecture: 'XML Schema (XSD)',
        tags: ['web', 'xml', 'schema', 'xsd'],
        question: 'XML Schema (XSD) описује структуру XML документа. Означити шта од наведеног дефинише XML Schema (заокружити више понуђених одговора):',
        options: [
            '1. Типове података XML елемената и атрибута',
            '2. Вредности XML елемената и атрибута',
            '3. Уређење child елемената',
            '4. Списак child елемената',
            '5. Начин отварања и затварања елемената',
            '6. XML шему односно коренски (root) елемент документа'
        ],
        correctAnswer: [0, 1, 3],
        points: 3
    },
    {
        id: 203,
        group: 'ВЕБ ПРОГРАМИРАЊЕ',
        lecture: 'MVC руте',
        tags: ['web', 'mvc', 'route', 'fill-in'],
        type: 'fill-in',
        question: `Дата је MVC стандардна рута (default route)<br>
    <pre>http://localhost/Customer/Details/5</pre>
    која има 3 сегмента. Препознати на основу дате руте вредности ових сегмената и допунити реченицу:<br><br>
    Име контролера (Controller Name) је: <input type="text" class="fill-in-input" data-correct="Customer">, назив методе (Action Method Name) је: <input type="text" class="fill-in-input" data-correct="Details">, а ID параметра методе је дат са: <input type="text" class="fill-in-input" data-correct="5">`,
        options: [],
        correctAnswer: ["Customer", "Details", "5"],
        points: 1.5
    },
    {
        id: 204,
        group: 'ВЕБ ПРОГРАМИРАЊЕ',
        lecture: 'JavaScript објекти',
        tags: ['web', 'javascript', 'matching', 'window', 'location', 'history', 'document'],
        type: 'fill-in',
        question: `У JavaScript језику свака веб страница има објекте наведене у левој колони. На десној страни дати су описи наведених објеката. Повезати објекат са одговарајућим описом уносом редног броја који им је објекат нумерисан на означену линију:<br><br>
    <table style="border-collapse:separate; border-spacing:0 10px;">
    <tr><td>1. window</td><td><input class='fill-in-input' size='1' data-correct='3'> садржи URL адресе које су посећене након посете тренутној страници</td></tr>
    <tr><td>2. location</td><td><input class='fill-in-input' size='1' data-correct='4'> представља тренутно учитани документ и служи као приступ тачка садржају странице</td></tr>
    <tr><td>3. history</td><td><input class='fill-in-input' size='1' data-correct='2'> садржи информације о URL адреси документа који је тренутно приказан у посматраном прозору</td></tr>
    <tr><td>4. document</td><td><input class='fill-in-input' size='1' data-correct='1'> објекат највишег нивоа који садржи све друге објекте и представља прозор прегледача</td></tr>
    </table>`,
        options: [],
        correctAnswer: ["3", "4", "2", "1"],
        points: 2
    },
    {
        id: 205,
        group: 'ВЕБ ПРОГРАМИРАЊЕ',
        lecture: 'JavaScript форме',
        tags: ['web', 'javascript', 'forme', 'matching'],
        type: 'fill-in',
        question: `У JavaScript језику многи објекти имају уграђене функције (методе) које симулирају догађаје настале услед акција корисника. Уносом редног броја методе (лева колона) на предвиђену линију, повежите метод и одговарајућу акцију корисника.<br><br>
    1. focus <input class='fill-in-input' size='1' data-correct='4'> Изађе из фокуса елемента форме<br>
    2. submit <input class='fill-in-input' size='1' data-correct='3'> Учита страницу у прегледач<br>
    3. load <input class='fill-in-input' size='1' data-correct='1'> Уђе у фокус неког елемента форме<br>
    4. blur <input class='fill-in-input' size='1' data-correct='2'> Изврши слање форме`,
        options: [],
        correctAnswer: ["4", "3", "1", "2"],
        points: 2
    },
    {
        id: 206,
        group: 'ВЕБ ПРОГРАМИРАЊЕ',
        lecture: 'Веб компоненте',
        tags: ['web', 'komponente', 'matching'],
        type: 'fill-in',
        question: `Веб обрасци могу да садрже различите типове компоненти. Редни број под којим је наведена категорија компоненти уписати на линију испред одговарајуће групе компоненти веб обрасца:<br><br>
    <table style="border-collapse:separate; border-spacing:0 10px;">
    <tr>
      <td>1. HTML контроле</td>
      <td><input class='fill-in-input' size='1' data-correct='3'> TextBox, Label, Button, ListBox, DropDownList, DataGrid</td>
    </tr>
    <tr>
      <td>2. Контроле за податке</td>
      <td><input class='fill-in-input' size='1' data-correct='4'> FileSystemWatcher, EventLog, MessageQueue</td>
    </tr>
    <tr>
      <td>3. Серверске контроле</td>
      <td><input class='fill-in-input' size='1' data-correct='2'> SqlConnection, SqlCommand, OleDbConnection</td>
    </tr>
    <tr>
      <td>4. Системске компоненте</td>
      <td><input class='fill-in-input' size='1' data-correct='1'> Text Area, Table, Image, Submit Button, Reset Button</td>
    </tr>
    </table>`,
        options: [],
        correctAnswer: ['3', '4', '2', '1'],
        points: 4
    },
    {
        id: 207,
        group: 'ВЕБ ПРОГРАМИРАЊЕ',
        lecture: 'IIS модули',
        tags: ['web', 'iis', 'moduli', 'matching'],
        type: 'fill-in',
        question: `Садашње верзије IIS сервера изграђене су на модуларној архитектури. Повежите називе модула са функцијама које обављају:<br><br>
    <table style="border-collapse:separate; border-spacing:0 10px;">
    <tr>
      <td>1. HTTP модули</td>
      <td><input class='fill-in-input' size='1' data-correct='3'> Модули за праћење и извештавање о догађајима насталим током процесирања захтева...</td>
    </tr>
    <tr>
      <td>2. Безбедносни модули</td>
      <td><input class='fill-in-input' size='1' data-correct='4'> Модули за обраду захтева за статичке фајлове, враћање подразумевне странице када клијент не наведе ресурс у захтеву, излиставање садржаја директоријума...</td>
    </tr>
    <tr>
      <td>3. Модули за евиденцију и дијагностику</td>
      <td><input class='fill-in-input' size='1' data-correct='1'> Модули за одговорарање на информације, враћање HTTP грешака, преусмеравање захтева...</td>
    </tr>
    <tr>
      <td>4. Модули садржаја</td>
      <td><input class='fill-in-input' size='1' data-correct='2'> Модули за ауторизацију УРЛ адреса, филтрирање захтева...</td>
    </tr>
    </table>`,
        options: [],
        correctAnswer: ['3', '4', '1', '2'],
        points: 4
    },
    {
        id: 208,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Ентитети и атрибути',
        tags: ['baze', 'entiteti', 'atributi'],
        question: 'Међу понуђеним ентитетима, одредити ентитет са атрибутима који НИСУ одговарајући. Заокружити број испред траженог одговора:',
        options: [
            '1. Ентитет: СТУДЕНТ – Атрибути: име, презиме, смер, број бодова, просек',
            '2. Ентитет: ДРЖАВА – Атрибути: назив, број становника, површина',
            '3. Ентитет: КЊИГА – Атрибути: наслов, аутор, година издања, издавач, адреса издавача, телефон издавача',
            '4. Ентитет: АВИОН – Атрибути: произвођач, марка, година производње, број седишта'
        ],
        correctAnswer: 2,
        points: 1
    },
    {
        id: 209,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Примарни кључ',
        tags: ['baze', 'primarni ključ'],
        question: 'Заокружите тачан исказ:',
        options: [
            '1. Примарни кључ је атрибут који мора бити целобројног типа.',
            '2. Примарни кључ је атрибут који указује на зависност од неке друге табеле.',
            '3. Примарни кључ је атрибут који јединствено идентификује врсте у табели.',
            '4. Ако табела садржи вишевредносни атрибут, њему се додељује функција примарног кључа.'
        ],
        correctAnswer: 2,
        points: 1
    },
    {
        id: 210,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'SQL WHERE',
        tags: ['baze', 'sql', 'where', 'like'],
        question: 'Заокружити број испред траженог одговора. Одредити оператор који би требало користити у WHERE клаузули SELECT наредбе да би били приказани само они ученици чије презиме почиње словом А:',
        options: [
            '1. IN',
            '2. LIKE',
            '3. BETWEEN',
            '4. IS LIKE',
            '5. BEGINS WITH'
        ],
        correctAnswer: 1,
        points: 1
    },
    {
        id: 211,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'SQL WHERE',
        tags: ['baze', 'sql', 'where', 'null'],
        question: 'Заокружити број испред траженог одговора. Табела УЦЕНИЦИ поред осталих података, садржи и вредност стипендије. Одредити оператор који треба употребити у WHERE клаузули SELECT наредбе да би били приказани сви ученици код којих није позната и није унета вредност у колону стипендија:',
        options: [
            '1. =NULL',
            '2. ISNULL',
            '3. NULL',
            '4. IS NULL',
            '5. LIKE NULL'
        ],
        correctAnswer: 3,
        points: 1
    },
    {
        id: 212,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'Базе података', 'Upiti'],
        question: 'Дат је упит:<br><pre><code><span class="code-keyword">SELECT</span> *<br><span class="code-keyword">FROM</span> ucenici<br><span class="code-keyword">WHERE</span> odeljenje=4 <span class="code-keyword">OR</span> odeljenje=7 <span class="code-keyword">OR</span> odeljenje=10</code></pre><br>Заокружити оператор који треба користити у датом упиту да би се изабрало више од једног одељења оператором OR:',
        options: [
            '<span class="code-keyword">LIKE</span>',
            '<span class="code-keyword">BETWEEN</span>',
            '<span class="code-keyword">AND</span>',
            '<span class="code-keyword">IN</span>'
        ],
        correctAnswer: 3,
        points: 1
    },
    {
        id: 213,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'Базе података', 'Upiti'],
        question: 'Заокруживањем редног броја обележи клаузулу коју је потребно користи уколико листа иза резервисане речи <span class="code-keyword">SELECT</span> садржи агрегатну функцију и једну или више колона које нису део агрегатне функције:',
        options: [
            '<span class="code-keyword">HAVING</span> клаузулу',
            '<span class="code-keyword">GROUP BY</span> клаузулу',
            '<span class="code-keyword">JOIN</span> клаузулу',
            '<span class="code-keyword">ORDER BY</span> клаузулу'
        ],
        correctAnswer: 1,
        points: 1
    },
    {
        id: 214,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'Базе података', 'Veze'],
        question: 'Заокружити тачан исказ:',
        options: [
            'Кардиналност неке везе представља однос броја објеката који се повезују.',
            'Кардиналност неке везе представља апстракцију у којој се скуп сличних типова објеката представља општим генеричким типом (надтипом).',
            'Кардиналност неке везе одређује анонимност учесника у вези.',
            'Кардиналност показује колико кандидата за примарни кључ има неки тип ентитета.'
        ],
        correctAnswer: 0,
        points: 1
    },
    {
        id: 215,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'Базе података', 'ALTER TABLE'],
        question: 'Дат је табела PROJEKAT над којом се извршава упит:<br><pre><code><span class="code-keyword">ALTER TABLE</span> PROJEKAT <span class="code-keyword">ADD</span> RokKraj <span class="code-keyword">date</span></code></pre><br>Упит ће дати десетак изјава након извршавања упита. Заокружити број испред тачног одговора.',
        options: [
            'у табели PROJEKAT додаје се ограничење RokKraj',
            'у табели PROJEKAT додаје се колона RokKraj',
            'у табели PROJEKAT брише поменута колона',
            'у табели PROJEKAT мења се тип података у колони RokKraj',
            'у табели PROJEKAT мења се примарни кључ у колони RokKraj'
        ],
        correctAnswer: 1,
        points: 1
    },
    {
        id: 216,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'Базе података', 'Upiti'],
        question: `Дата је табела <b>RADNIK</b> и упит:<br>
    <table border="1" style="border-collapse:collapse;">
    <tr><th>IDBR</th><th>IME</th><th>PREZIME</th><th>PLATA</th><th>PREMIJA</th><th>DATZAP</th></tr>
    <tr><td>6234</td><td>Marko</td><td>Pavlović</td><td>1300</td><td>3000</td><td>1990-12-17</td></tr>
    <tr><td>6789</td><td>Janko</td><td>Nikolić</td><td>3900</td><td>10</td><td>1999-12-23</td></tr>
    </table>
    <pre><code><span class="code-keyword">SELECT</span> Ime, Prezime, <span class="code-keyword">DATEDIFF</span>(<span class="code-keyword">year</span>, DatZap, <span class="code-keyword">GETDATE</span>()) <span class="code-keyword">AS</span> God <span class="code-keyword">FROM</span> Radnik</code></pre>
    Одредити шта је резултат упита. Заокружити број испред траженог одговора:`,
        options: [
            'Табела са подацима о именима и презименима радника',
            'Табела са подацима о именима, презименима и броју година које су протекле од датума запослења радника до краја века',
            'Табела са подацима о именима, презименима и датумима запослења радника',
            'Табела са подацима о именима, презименима и броју година које су протекле од датума запослења радника до тренутног датума'
        ],
        correctAnswer: 3,
        points: 1
    },
    {
        id: 217,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'Базе података', 'Upiti', 'GROUP BY', 'HAVING'],
        question: `Дата је табела <b>RADNIK</b>, табела <b>ODELJENJE</b> и упит:<br>
    <table border="1" style="border-collapse:collapse;">
    <tr><th>IDBR</th><th>IME</th><th>PREZIME</th><th>PLATA</th><th>BROD</th></tr>
    <tr><td>5900</td><td>Slobodan</td><td>Golubović</td><td>900</td><td>10</td></tr>
    <tr><td>5932</td><td>Mitar</td><td>Gavrilović</td><td>600</td><td>10</td></tr>
    <tr><td>5953</td><td>Persida</td><td>Kosanović</td><td>1100</td><td>20</td></tr>
    <tr><td>6234</td><td>Marko</td><td>Pavlović</td><td>1300</td><td>30</td></tr>
    <tr><td>6789</td><td>Janko</td><td>Nikolić</td><td>800</td><td>10</td></tr>
    </table>
    <br>
    <table border="1" style="border-collapse:collapse;">
    <tr><th>BROD</th><th>IMEOD</th><th>MESTO</th></tr>
    <tr><td>50</td><td>Skladišta</td><td>Zemun</td></tr>
    <tr><td>30</td><td>Marketing</td><td>Vračar</td></tr>
    <tr><td>10</td><td>Plasman</td><td>Surčin</td></tr>
    <tr><td>20</td><td>Direkcija</td><td>Grocka</td></tr>
    <tr><td>40</td><td>Nabavka</td><td>Barajevo</td></tr>
    </table>
    <pre><code><span class="code-keyword">SELECT</span> Imeod, <span class="code-keyword">AVG</span>(Plata) <span class="code-keyword">AS</span> ProsekPlata <span class="code-keyword">FROM</span> Radnik, Odeljenje
    <span class="code-keyword">WHERE</span> Odeljenje.Brod=Radnik.Brod <span class="code-keyword">GROUP BY</span> Imeod <span class="code-keyword">HAVING</span> <span class="code-keyword">AVG</span>(Plata)&gt;1000</code></pre>
    Одредити резултат извршавања датог упита. Заокружити број испред траженог одговора:`,
        options: [
            'Упит се не извршава зато што груписање мора да се изврши не само по називу одељења, него и по шифри одељења (Brod)',
            'Групишу се појединачна примања свих радника са понудом одељења по плати',
            'Приказују називи одељења и висина просечне плате у њима само за одељења у којима је просечна плата већа од 1000',
            'Приказују називи одељења и висина просечне плате у њима, при чему се код одређивања просека узимају у обзир само плате веће од 1000'
        ],
        correctAnswer: 2,
        points: 1
    },
    {
        id: 218,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'Базе података', 'LEFT JOIN'],
        question: `Дата је табела <b>RADNIK</b>, табела <b>ODELJENJE</b> и упит:<br>
    <table border="1" style="border-collapse:collapse;">
    <tr><th>IDBR</th><th>IME</th><th>PREZIME</th><th>PLATA</th><th>BROD</th></tr>
    <tr><td>5900</td><td>Slobodan</td><td>Golubović</td><td>900</td><td>10</td></tr>
    <tr><td>5932</td><td>Mitar</td><td>Gavrilović</td><td>600</td><td></td></tr>
    <tr><td>6234</td><td>Marko</td><td>Pavlović</td><td>1300</td><td>30</td></tr>
    <tr><td>6789</td><td>Janko</td><td>Nikolić</td><td>800</td><td>10</td></tr>
    </table>
    <br>
    <table border="1" style="border-collapse:collapse;">
    <tr><th>BROD</th><th>IMEOD</th><th>MESTO</th></tr>
    <tr><td>50</td><td>Skladišta</td><td>Zemun</td></tr>
    <tr><td>30</td><td>Marketing</td><td>Vračar</td></tr>
    <tr><td>10</td><td>Plasman</td><td>Surčin</td></tr>
    <tr><td>20</td><td>Direkcija</td><td>Grocka</td></tr>
    </table>
    <pre><code><span class="code-keyword">SELECT</span> Odeljenje.Imeod, Radnik.Ime+' '+Radnik.Prezime <span class="code-keyword">as</span> PunoIme
    <span class="code-keyword">FROM</span> Odeljenje <span class="code-keyword">LEFT JOIN</span> Radnik <span class="code-keyword">ON</span> Radnik.Brod = Odeljenje.Brod</code></pre>
    Одредити шта ће бити резултат датог упита. Заокружити број испред траженог одговора:`,
        options: [
            'Називи свих одељења – и оних у којима има радника и оних где нико није распоређен – са бројем радника у сваком одељењу',
            'За сваки распоређени радника приказује се по један ред са називом одељења и пуним именом радника, док се за одељења која нису распоређена приказује само пуно име радника',
            'Приказује се по један ред за сваког распоређеног радника са називом одељења и пуним именом радника. За раднике који нису распоређени, и за одељења у којима нико није распоређен, не формирају се редови у резултујућој табели',
            'За свако одељење се приказује онолико редова колико радника ради у том одељењу, док се за одељења у којима нико не ради приказује по један ред са називом одељења'
        ],
        correctAnswer: 3,
        points: 1
    },
    {
        id: 219,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'Базе података', 'JOIN', 'GROUP BY', 'COUNT'],
        question: `Дата је табела <b>RADNIK</b>, табела <b>ODELJENJE</b> и упит:<br>
    <table border="1" style="border-collapse:collapse;">
    <tr><th>IDBR</th><th>IME</th><th>PREZIME</th><th>PLATA</th><th>BROD</th></tr>
    <tr><td>5900</td><td>Slobodan</td><td>Golubović</td><td>900</td><td>10</td></tr>
    <tr><td>5932</td><td>Mitar</td><td>Gavrilović</td><td>600</td><td>10</td></tr>
    <tr><td>5953</td><td>Persida</td><td>Kosanović</td><td>1100</td><td>20</td></tr>
    <tr><td>6234</td><td>Marko</td><td>Pavlović</td><td>1300</td><td>30</td></tr>
    <tr><td>6789</td><td>Janko</td><td>Nikolić</td><td>800</td><td>10</td></tr>
    </table>
    <br>
    <table border="1" style="border-collapse:collapse;">
    <tr><th>BROD</th><th>IMEOD</th><th>MESTO</th></tr>
    <tr><td>50</td><td>Skladišta</td><td>Zemun</td></tr>
    <tr><td>30</td><td>Marketing</td><td>Vračar</td></tr>
    <tr><td>10</td><td>Plasman</td><td>Surčin</td></tr>
    <tr><td>20</td><td>Direkcija</td><td>Grocka</td></tr>
    <tr><td>40</td><td>Nabavka</td><td>Barajevo</td></tr>
    </table>
    <pre><code><span class="code-keyword">SELECT</span> Odeljenje.Brod, Odeljenje.Imeod, <span class="code-keyword">COUNT</span>(*)<br>
    <span class="code-keyword">FROM</span> Radnik <span class="code-keyword">INNER JOIN</span> Odeljenje <span class="code-keyword">ON</span> Radnik.Brod = Odeljenje.Brod<br>
    <span class="code-keyword">GROUP BY</span> Odeljenje.Brod, Odeljenje.Imeod</code></pre>
    Одредити податке који ће резултирати датим упитом. Заокружити број испред траженог одговора:`,
        options: [
            'Бројеви и називи свих одељења',
            'Бројеви и називи одељења са бројем радника у њима',
            'Бројеви и називи одељења у којима има радника са бројем радника у њима',
            'Бројеви и називи одељења у којима нема радника'
        ],
        correctAnswer: 2,
        points: 1
    },
    {
        id: 220,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'Базе података', 'GROUP BY', 'MIN'],
        question: `Извршава се следећа <span class="code-keyword">SELECT</span> наредба:<br>
    <pre><code><span class="code-keyword">SELECT</span> <span class="code-keyword">MIN</span>(Datum_Zaposlenja), Odsek_Id<br>
    <span class="code-keyword">FROM</span> Zaposleni<br>
    <span class="code-keyword">GROUP BY</span> Odsek_Id</code></pre>
    Заокруживањем броја испред одговарајућег исказа, одредити које ће вредности бити приказане:`,
        options: [
            'Најранији датум запослења за сваки одсек предузећа.',
            'Најранији датум запослења у целом предузећу.',
            'Датум запослења последњег запосленог радника у целом предузећу.',
            'Датум запослења последњег запосленог радника за сваки одсек одвојено.',
            'Датум запослења најстаријег запосленог радника у сваком одсеку предузећа.'
        ],
        correctAnswer: 0,
        points: 1
    },
    {
        id: 221,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'Базе података', 'AVG', 'SELECT', 'Subquery'],
        question: `Потребно је креирати извештај који приказује имена свих производа чија је цена већа од просечне цене свих производа.<br>Заокружити број испред упита који одговара постављеном задатку:`,
        options: [
            '<span class="code-keyword">SELECT</span> naziv<br><span class="code-keyword">FROM</span> proizvod<br><span class="code-keyword">WHERE</span> cena &gt; (<span class="code-keyword">SELECT</span> <span class="code-keyword">AVG</span>(cena) <span class="code-keyword">FROM</span> proizvod)',
            '<span class="code-keyword">SELECT</span> naziv<br><span class="code-keyword">FROM</span> proizvod<br><span class="code-keyword">WHERE</span> cena &gt; <span class="code-keyword">AVG</span>(cena)',
            '<span class="code-keyword">SELECT</span> naziv<br><span class="code-keyword">FROM</span> proizvod<br><span class="code-keyword">GROUP BY</span> naziv<br><span class="code-keyword">HAVING</span> cena &gt; <span class="code-keyword">AVG</span>(cena)',
            '<span class="code-keyword">SELECT</span> naziv<br><span class="code-keyword">FROM</span> proizvod<br><span class="code-keyword">WHERE</span> cena &gt; <span class="code-keyword">AVG</span>(cena) <span class="code-keyword">FROM</span> proizvod'
        ],
        correctAnswer: 0,
        points: 1
    },
    {
        id: 222,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'Базе података', 'ORDER BY', 'HAVING'],
        question: `Извршава се упит:<br>
    <pre><code><span class="code-keyword">SELECT</span> prezime, ime, email<br>
    <span class="code-keyword">FROM</span> ucenik<br>
    <span class="code-keyword">ORDER BY</span> prezime<br>
    <span class="code-keyword">WHERE</span> prosek&gt;=4.50</code></pre>
    Наредба се неће извршити. Заокружити број испред разлога услед кога се наредба неће извршити:`,
        options: [
            'Наредба се неће извршити једино ако нема ни једног одличника ученика.',
            'Услов треба написати у HAVING клаузули.',
            'Потребно је назначити редослед сортирања (asc, desc).',
            'Потребно је променити редослед клаузула.'
        ],
        correctAnswer: 3,
        points: 1
    },
    {
        id: 223,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'Базе података', 'GROUP BY', 'MIN', 'HAVING'],
        question: `Табела <b>ARTIKLI</b> садржи следеће колоне: artikl_id, naziv, kategorija, cena, kolicina.<br>
    Потребно је да се прикажу категорија и минимална цена артикла у свакој категорији. При томе се траже прикази само оних категорија где је најмања цена производа већа од задате граничне вредности која се преноси упиту кроз параметар <span class="code-keyword">@granica</span>.<br>
    Изабрати упит који даје тражени извештај:`,
        options: [
            `<span class="code-keyword">SELECT</span> kategorija, <span class="code-keyword">MIN</span>(cena)<br><span class="code-keyword">FROM</span> artikli<br><span class="code-keyword">WHERE</span> <span class="code-keyword">MIN</span>(cena)&gt;@granica<br><span class="code-keyword">GROUP BY</span> cena`,
            `<span class="code-keyword">SELECT</span> kategorija, <span class="code-keyword">MIN</span>(cena)<br><span class="code-keyword">FROM</span> artikli<br><span class="code-keyword">GROUP BY</span> kategorija<br><span class="code-keyword">HAVING</span> <span class="code-keyword">MIN</span>(cena)&gt;@granica`,
            `<span class="code-keyword">SELECT</span> kategorija, <span class="code-keyword">MIN</span>(cena)<br><span class="code-keyword">FROM</span> artikli<br><span class="code-keyword">GROUP BY</span> <span class="code-keyword">MIN</span>(cena), kategorija<br><span class="code-keyword">HAVING</span> <span class="code-keyword">MIN</span>(cena)&gt;@granica`,
            `<span class="code-keyword">SELECT</span> kategorija, <span class="code-keyword">MIN</span>(cena)<br><span class="code-keyword">FROM</span> artikli<br><span class="code-keyword">WHERE</span> <span class="code-keyword">MIN</span>(cena)&gt;@granica<br><span class="code-keyword">GROUP BY</span> kategorija`
        ],
        correctAnswer: 1,
        points: 1
    },
    {
        id: 224,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'Базе података', 'GROUP BY', 'COUNT', 'DISTINCT'],
        question: `Табела <b>RADIONICA</b> садржи следеће колоне: radionica_id, naziv, zanat, lokacija_id.<br>
    Потребно је да се прикаже колико има локација и на свакој локацији има различитих заната.<br>
    Заокружити број испред упита који даје тражени извештај:`,
        options: [
            `<span class="code-keyword">SELECT DISTINCT</span> location_id, <span class="code-keyword">COUNT</span>(zanat)<br><span class="code-keyword">FROM</span> radionica<br><span class="code-keyword">GROUP BY</span> lokacija_id`,
            `<span class="code-keyword">SELECT</span> location_id, <span class="code-keyword">COUNT</span>(zanat)<br><span class="code-keyword">FROM</span> radionica<br><span class="code-keyword">GROUP BY</span> lokacija_id`,
            `<span class="code-keyword">SELECT</span> location_id, <span class="code-keyword">COUNT</span>(<span class="code-keyword">DISTINCT</span> zanat)<br><span class="code-keyword">FROM</span> radionica<br><span class="code-keyword">GROUP BY</span> lokacija_id`,
            `<span class="code-keyword">SELECT</span> location_id, <span class="code-keyword">COUNT</span>(<span class="code-keyword">DISTINCT</span> zanat)<br><span class="code-keyword">FROM</span> radionica<br><span class="code-keyword">GROUP BY</span> zanat`
        ],
        correctAnswer: 2,
        points: 1
    },
    {
        id: 225,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'Базе података', 'GROUP BY'],
        question: `Заокружити број испред одговора који представља наставак релације исказа:<br>
    Уколико поље (више поља) треба користити за измену података у табели, поглед HE CME садржи...`,
        options: [
            'WHERE клаузулу',
            'Свој измењене табела',
            'Алијас колоне',
            'GROUP BY клаузулу'
        ],
        correctAnswer: 3,
        points: 1
    },
    {
        id: 226,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'Базе података', 'VIEW', 'GROUP BY'],
        question: `Дат је упит за креирање погледа и наведени искази који се односе на дати упит.<br>
    Заокружити број испред тачног исказа:<br>
    <pre><code><span class="code-keyword">CREATE VIEW</span> Pregled_Proseka <span class="code-keyword">AS</span><br>
    <span class="code-keyword">SELECT</span> UcenikID, Ime, Prezime, <span class="code-keyword">AVG</span>(Ocena) <span class="code-keyword">AS</span> Prosek <span class="code-keyword">FROM</span> Testovi<br>
    <span class="code-keyword">WHERE</span> OdeljenjeID <span class="code-keyword">IN</span> (1, 2, 3, 4)<br>
    <span class="code-keyword">GROUP BY</span> UcenikID, Ime, Prezime</code></pre>`,
        options: [
            'Подаци у табели Testovi се могу модификовати коришћењем погледа Pregled_Proseka',
            'Коришћењем датог погледа, подаци се могу само у додавати у табелу Testovi, али не и мењати',
            'Оваквa дат упит изазива грешку при извршењу',
            'Коришћењем датог погледа, подаци из табеле Testovi се могу само прегледавати, али не и додавати или мењати'
        ],
        correctAnswer: 3,
        points: 1
    },
    {
        id: 227,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'CASE',
        tags: ['CASE', 'CASE tools', 'alati'],
        question: 'Заокружити бројеве испред тражених одговора. Међу понуђеним алатима, обележити Case алате:',
        options: [
            'Rational Rose',
            'Oracle Designer',
            '.NET',
            'Microsoft Visio',
            'Java',
            'SQL Express'
        ],
        correctAnswer: [0, 1, 3],
        points: 1.5
    },
    {
        id: 228,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'Базе података', 'DML', 'UPDATE', 'INSERT', 'DELETE'],
        question: 'Означити команде које се сматрају командама ажурирања података у бази података. Заокружити бројеве испред тражених одговора:',
        options: [
            'Организовање података',
            'Додавање нових података',
            'Брисање старих података',
            'Враћање обрисаних података у коректно стање',
            'Измена постојећих података',
            'Додела права приступа подацима',
            'Измена структуре постојећих табела у бази'
        ],
        correctAnswer: [1, 2, 4],
        points: 1.5
    },
    {
        id: 229,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'ORDER BY',
        tags: ['SQL', 'Базе података', 'ORDER BY'],
        question: 'Заокружити бројеве испред тражених одговора.<br>За упите са специфицирањем редоследа приказа редова у резултујућој табели користи се клаузула ORDER BY која се наводи након назива колоне:',
        options: [
            'и службена реч ASC за растући редослед',
            'и службена реч DESC за опадајући редослед',
            'и службена реч ASC за опадајући редослед',
            'и службена реч DESC за растући редослед',
            'службена реч се може изоставити при чему се добија растући поредак',
            'службена реч се може изоставити при чему се добија опадајући поредак'
        ],
        correctAnswer: [0, 1, 4],
        points: 1.5
    },
    {
        id: 230,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'Базе података', 'DDL', 'CREATE', 'ALTER', 'DROP'],
        question: 'Заокружити бројеве испред наредби које служе за креирање, брисање и измену структуре релационе базе и објеката који чине релациону базу:',
        options: [
            'ALTER TABLE',
            'INSERT',
            'CREATE TABLE',
            'DROP TABLE',
            'UPDATE',
            'DELETE TABLE',
            'ADD COLUMN',
            'ADD CONSTRAINT'
        ],
        correctAnswer: [0, 2, 3],
        points: 1.5
    },
    {
        id: 231,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['Baze podataka', 'Entiteti', 'Atributi'],
        question: 'Одредити ентитете који садрже одговарајуће атрибуте:<br>Заокружити бројеве испред тражених одговора.',
        options: [
            'Ентитет: КЊИГА — Атрибути: наслов, аутор, издавач, година издања',
            'Ентитет: АУТОМОБИЛИ — Атрибути: марка, година производње, боја, власник, година рођења власника, регистрацијски број',
            'Ентитет: УЧЕНИК — Атрибути: име, презиме, разред, одељење, број оправдања, број неоправдања, просек',
            'Ентитет: ДРЖАВА — Атрибути: назив, број становника, површина, главни град, број становника главног града, име председника главног града'
        ],
        correctAnswer: [0, 2],
        points: 2
    },
    {
        id: 232,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'Baze podataka', 'Foreign key', 'Referencijalni integritet'],
        question: 'Дати су искази који се односе на спољашњи кључ табеле (<i>foreign key constraint</i>). Заокружити бројеве испред тачних исказа:',
        options: [
            'Вредност у колони спољашњег кључа не сме бити NULL',
            'Вредност спољашњег кључа мора бити јединствена (unique) у колони над којом је дефинисано ограничење спољашњег кључа',
            'Вредност у пољу спољашњег кључа мора бити или NULL или једнака некој од вредности из колоне на коју спољашњи кључ референцира',
            'Више колона у табели може садржати исту вредност у пољу спољашњег кључа и тиме показивати на исти ред у референтној табели',
            'Вредност спољашњег кључа не мора садржати исти тип података као колона на коју се односи'
        ],
        correctAnswer: [2, 3],
        points: 2
    },
    {
        id: 233,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'Baze podataka', 'Operatori', 'ALL', 'ANY', 'BETWEEN', 'SOME', 'LIKE', 'IN'],
        question: 'Заокружити операторе који се <b>НЕ МОГУ</b> користити са поређењем са подупитoм који враћа више вредности:',
        options: [
            '<span class="code-keyword">ALL</span>',
            '<span class="code-keyword">ANY</span>',
            '<span class="code-keyword">BETWEEN</span>',
            '<span class="code-keyword">SOME</span>',
            '<span class="code-keyword">LIKE</span>',
            '<span class="code-keyword">IN</span>'
        ],
        correctAnswer: [2, 4],
        points: 2
    },
    {
        id: 234,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'INSERT', 'SELECT', 'struktura tabele'],
        question: `Дата је табела Kupci са структуром:<br>
    <pre><code>(
        Id int primary key, Prezime varchar(50), Adresa varchar(50), Mesto varchar(20), Telefon varchar(20), Status varchar(8)
    )</code></pre>
    И табела NoviKupci са структуром:<br>
    <pre><code>(
        Id int primary key, Prezime varchar(50), Telefon varchar(20), Status varchar(8)
    )</code></pre>
    Извршава се упит:<br>
    <pre><code>INSERT INTO NoviKupci
    SELECT * FROM Kupci WHERE Status &lt;&gt; 'Aktivan'</code></pre>
    Одредити шта је резултат извршавања датог упита. Заокружити број испред траженог одговора:`,
        options: [
            'Како табела NoviKupci има све колоне које постоје и у табели Kupci, упит се извршава без грешке и у табелу NoviKupci се уписују записи из табеле Kupci са статусом који није Aktivan',
            'Упит се не извршава, пријављује грешку јер се број колона у табели Kupci разликује од броја колона у табели NoviKupci',
            'Упит би се извршио без грешке да су у SELECT клаузули подупити, уместо наведенe све колоне табеле Kupci које имају своју одговарајућу колону у табели NoviKupci',
            'Упит јавља грешку ако покушаја уписа вредности у поље примарног кључа који је аутоматски, тј. креира га сама база'
        ],
        correctAnswer: [1, 2],
        points: 2
    },
    {
        id: 235,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'UPDATE', 'procedura', 'parametar'],
        question: `Дата је табела RADNIK, табела ODELJENJE и упит:<br>
    <table border="1" style="border-collapse:collapse;">
    <tr><th>IDBR</th><th>IME</th><th>PREZIME</th><th>PLATA</th><th>SIFRADO</th></tr>
    <tr><td>5900</td><td>Slobodan</td><td>Golubović</td><td>900</td><td>10</td></tr>
    <tr><td>5932</td><td>Mitar</td><td>Gavrilović</td><td>600</td><td></td></tr>
    <tr><td>5953</td><td>Persida</td><td>Kosanović</td><td>1100</td><td>20</td></tr>
    </table>
    <br>
    <table border="1" style="border-collapse:collapse;">
    <tr><th>SIFRADO</th><th>IMEOD</th><th>MESTO</th></tr>
    <tr><td>10</td><td>Marketing</td><td>Vračar</td></tr>
    <tr><td>20</td><td>Direkcija</td><td>Grocka</td></tr>
    <tr><td>30</td><td>Nabavka</td><td>Barajevo</td></tr>
    </table>
    Креирана је усложњена процедура са параметром @br int = NULL<br>
    Позивом процедуре извршава се упит:<br>
    <pre><code>UPDATE Radnik SET Radnik.SifraOD = 30
    WHERE Radnik.SifraOD=@br OR @br IS NULL</code></pre>
    Означити који од понуђених исказа су тачни. Заокружити бројеве испред тражених одговора:`,
        options: [
            'Сви радници који раде у одељењу са шифром једнакој вредности која је пренета кроз параметар @br, биће прераспоређени у одељење чија је шифра 30',
            'Упит прераспоређује све непријављене раднике у одељење са шифром 30',
            'Уколико се параметру @br не пренесе вредност, радници који су до тог момента били нераспоређени, биће прераспоређени у одељење са шифром 30',
            'Уколико се параметру @br не пренесе вредност, СВИ радници ће бити прераспоређени у одељење чија је шифра 30'
        ],
        correctAnswer: [0, 2],
        points: 2
    },
    {
        id: 236,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'Baze podataka', 'GROUP BY', 'podupit', 'MAX'],
        question: `Табела Zaposleni садржи поља: Zaposleni_Id, Ime, Prezime, Plata, Odsek_Id.<br>
    Дат је упит:<br>
    <pre><code>SELECT Zaposleni_Id, Ime, Prezime
    FROM Zaposleni
    WHERE Plata=(SELECT MAX(Plata) FROM Zaposleni GROUP BY Odsek_Id)</code></pre>
    Дати су искази који описују ефекат извршавања упита. Заокружити бројеве испред ТАЧНИХ исказа:`,
        options: [
            'Упит се не извршава зато што у подупиту није дозвољено коришћење групних функција',
            'Упит се извршава без грешке и из сваког одељења бира и приказује податке о раднику који има највећу плату у том одељењу.',
            'Упит се не извршава јер подупит враћа више од једне врсте, а коришћен је оператор за поређење са једном вредношћу.',
            'Уколико би се изоставила GROUP BY клаузула, упит би се извршавао без грешке и приказао би једног или више радника са платом једнакој највећој плати (без обзира на одељење).',
            'Како подупит садржи груписање, да би се цео упит извршио без грешке, потребно је услов са подупитом написати у HAVING уместо у WHERE клаузули'
        ],
        correctAnswer: [2, 3],
        points: 2
    },
    {
        id: 237,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'Baze podataka', 'aritemtičke operacije', 'klauzule'],
        question: 'Заокружити бројеве под којима су наведене клаузуле SQL наредбе у којима се могу користити аритметичке операције:',
        options: [
            'SELECT',
            'FROM',
            'WHERE',
            'ORDER BY'
        ],
        correctAnswer: [0, 2],
        points: 2
    },
    {
        id: 238,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'Baze podataka', 'IN', 'BETWEEN', 'AND'],
        question: `Извршава се следећи упит:<br>
    <pre><code>SELECT cena
    FROM proizvod
    WHERE cena IN (101,125,150,350)
    AND (cena BETWEEN 125 AND 140 OR cena >150)</code></pre>
    Одредити које две вредности може вратити овај упит. Заокружити бројеве испред тражених вредности:`,
        options: [
            '101',
            '150',
            '125',
            '110',
            '350'
        ],
        correctAnswer: [2, 4],
        points: 2
    },
    {
        id: 239,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'Baze podataka', 'UPDATE', 'MERGE', 'DELETE'],
        question: 'Заокружити бројеве испред команди које се могу користити за ажурирање постојећих података у бази:',
        options: [
            'DELETE',
            'MERGE',
            'SELECT',
            'UPDATE'
        ],
        correctAnswer: [0, 1, 3],
        points: 2
    },
    {
        id: 240,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'INSERT', 'SELECT', 'struktura tabele'],
        question: `Креиране су табеле SKOLA и OSNOVNASOLA, а затим су у табели SKOLA уписани подаци извршавањем следећих наредби:<br>
    <pre><code>create table Skola(
        skolaID int primary key, Naziv nvarchar(50), gradID int, tip nvarchar(50) )
    create table OsnovnaSkola(
        gimID int primary key, Naziv nvarchar(50), gradID int )
    insert into Skola values (101,'Nikola Tesla',20, 'srednja strucna')
    insert into Skola values (102,'Dusko Radovic', 20,'osnovna')
    insert into Skola values (103,'Sveti Sava', 30,'osnovna')
    insert into Skola values (104,'Bora Stankovic', 20,'gimnazija')
    </code></pre>
    У табели OSNOVNASkola треба уписати податке о основним школама преписивањем потребних вредности из табеле SKOLA. Заокружити бројеве испред упита који не јављају грешку при извршењу:`,
        options: [
            "select * into OsnovneSkole from Skola where tip='osnovna'",
            "insert into OsnovneSkole select * from Skola where tip='osnovna'",
            "insert into OsnovneSkole(skolaID, Naziv) select s.skolaID, s.Naziv from Skola as s where tip='osnovna'",
            "insert into OsnovneSkole select s.skolaID, s.Naziv, s.gradID from Skola as s where tip='osnovna'"
        ],
        correctAnswer: [0, 1],
        points: 2
    },
    {
        id: 241,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'LEFT JOIN', 'GROUP BY', 'COUNT'],
        question: `Креиране су и попуњене подацима табеле <b>Korisnik</b> и <b>Prijatelji</b>. Њихова структура и садржај приказани су на слици:<br>
    <table border="1" style="border-collapse:collapse;">
    <tr><th>ID</th><th>IME</th><th>POL</th></tr>
    <tr><td>1</td><td>Ana</td><td>NULL</td></tr>
    <tr><td>2</td><td>Steva</td><td>m</td></tr>
    <tr><td>3</td><td>Marta</td><td>z</td></tr>
    <tr><td>4</td><td>Petra</td><td>z</td></tr>
    </table>
    <br>
    <table border="1" style="border-collapse:collapse;">
    <tr><th>Korisnik1</th><th>Korisnik2</th></tr>
    <tr><td>1</td><td>2</td></tr>
    <tr><td>1</td><td>3</td></tr>
    <tr><td>2</td><td>3</td></tr>
    </table>
    Извршавањем упита добија се табела са подацима.<br>
    <pre><code>select k.ime, COUNT(*) as [broj prijatelja]
    from Korisnik as k
    left join Prijatelji as p on p.korisnik1=k.id or p.korisnik2=k.id
    where k.pol='z'
    group by k.id, k.ime</code></pre>
    Заокруживањем бројева испред понуђених одговора, обележити који од наведених података ће бити приказани у појединим редовима резултујуће табеле:`,
        options: [
            'Ana, 1',
            'Ana, 2',
            'Steva, 1',
            'Steva, 2',
            'Marta, 1',
            'Marta, 2',
            'Petra, 0',
            'Petra, 1'
        ],
        correctAnswer: [5, 7],
        points: 2
    },
    {
        id: 242,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'constraints', 'ključne reči'],
        question: 'Заокружити бројеве испред кључних речи које се НЕ КОРИСТЕ за обележавање ограничења (constraints) у језику SQL:',
        options: [
            'Foreign key',
            'Unique',
            'Distinct',
            'Check',
            'Convert',
            'Union',
            'Not Null',
            'Except'
        ],
        correctAnswer: [2, 4, 5, 7],
        points: 2
    },
    {
        id: 243,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['Baze podataka', 'Entiteti', 'Atributi'],
        question: 'Одредити ентитете који садрже одговарајуће атрибуте. Заокружити бројеве испред тражених одговора:',
        options: [
            'Ентитет: СТУДЕНТ — Атрибути: име, презиме, смер, број бодова, просек',
            'Ентитет: КЊИГА — Атрибути: наслов, аутор, година издања, издавач, адреса издавача, телефон издавача',
            'Ентитет: АВИОН — Атрибути: произвођач, марка, година производње, број седишта',
            'Ентитет: ДРЖАВА — Атрибути: назив, број становника, површина',
            'Ентитет: САЈАМ — Атрибути: назив, број излагача, година одржавања, адреса одржавања, контакт особа, особа посетилац',
            'Ентитет: ТУРИСТИЧКА АГЕНЦИЈА — Атрибути: назив, адреса, година оснивања, број запослених, број аранжмана, исписаност, стручна квалификација запослених'
        ],
        correctAnswer: [0, 2, 3],
        points: 3
    },
    {
        id: 244,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['Baze podataka', 'Entiteti', 'Identifikatori'],
        question: 'Означити ентитете код којих је извршен адекватан избор јединственог идентификатора. Заокружити бројеве испред тражених одговора:',
        options: [
            'Јединствени матични број грађана (ЈМБГ) за ентитет ОСОБА',
            'датум рођења за ентитет ОСОБА',
            'ISBN број за ентитет КЊИГА',
            'регистрациона ознака за АУТОМОБИЛ',
            'део назива за ентитет АРАНЖМАН',
            'назив за ентитет ФИЛМ'
        ],
        correctAnswer: [0, 2, 3],
        points: 3
    },
    {
        id: 245,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'ANY оператор',
        tags: ['SQL', 'ANY', 'operatori', 'podupit'],
        question: 'Означити тачне исказе о оператору ANY који се примењује са поређењем са подупитом који враћа више вредности. Заокружити бројеве испред тражених одговора:',
        options: [
            'Оператор ANY може да се користи само уз операторе DISTINCT.',
            'Оператор ANY пореди вредност са свим вредностима које враћа подупит и враћа TRUE ако је услов задовољен за све вредности.',
            'Оператор ANY пореди вредност са сваком појединачном вредношћу коју враћа подупит и враћа TRUE ако је услов задовољен за бар једну вредност.',
            'Оператор ANY може да се користи уз операторе LIKE и IN.',
            'Оператор ANY мора да се користи уз операторе <, >, <=, >=, =, <>.',
            'Услов =ANY(скуп вредности) је еквивалентан услову IN(скуп вредности).'
        ],
        correctAnswer: [2, 4, 5],
        points: 3
    },
    {
        id: 246,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Основе',
        tags: ['SQL', 'CREATE TABLE', 'INSERT', 'SELECT INTO'],
        question: `Креирана је табела SKOLA, а затим су у њу уписани подаци извршавањем следећих наредби:<br>
    <pre><code>create table Skola(skolaID int primary key, Naziv varchar(50))
    insert into Skola values (101, 'Nikola Tesla')
    insert into Skola values (102, 'Mihajlo Pupin')
    insert into Skola values (103, 'ETS Zemun')</code></pre>
    За дати упит, треба означити по један тачан исказ за сваки од десет и заокруживањем броја испред сваког исказа, означити могуће исходе:<br>
    <pre><code>select * into StrucneSkole from Skola</code></pre>`,
        options: [
            'Креће се копија табеле Skola - нова табела под именом StrucneSkole исте структуре као и табела Skola и у њу се преписују сви редови из табеле Skola',
            'Креће се нова табела StrucneSkole исте структуре као и табела Skola, али се у њу не уписује ни један ред',
            'Уколико табела са именом StrucneSkole постоји у бази, упит јавља грешку',
            'Уколико се дода услов where 1=2 упит се извршава, креира се нова табела исте структуре као и табела Skola, али се у њу не уписује ни један ред',
            'Упит јавља грешку јер се кључна реч into користи искључиво у комбинацији са insert'
        ],
        correctAnswer: [0, 2, 3],
        points: 3
    },
    {
        id: 247,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Нормалне форме',
        tags: ['normalne forme', 'prva normalna forma'],
        question: `Допунити реченицу наводећи назив нормалне форме:<br>
    Атрибут који није атрибут релације није вишевредносни, нити композитни, тј. не може се растaviti, кажемо да је релација у <input class='fill-in-input' size='7' data-correct='првој'> нормалној форми.`,
        options: [],
        correctAnswer: ["првој"],
        points: 1,
        type: 'fill-in'
    },
    {
        id: 248,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Нормалне форме',
        tags: ['normalne forme', 'druga normalna forma'],
        question: `Допунити реченицу наводећи назив нормалне форме:<br>
    Сваки од атрибута релације који нису део кључа зависи од сваког атрибута који је део кључа кажемо да је релација у <input class='fill-in-input' size='7' data-correct='другој'> нормалној форми.`,
        options: [],
        correctAnswer: ["другој"],
        points: 1,
        type: 'fill-in'
    },
    {
        id: 249,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Нормалне форме',
        tags: ['normalne forme', 'treća normalna forma'],
        question: `Допунити реченицу наводећи назив нормалне форме:<br>
    Ако сваки не-кључни (непримарни) атрибут релације не зависи од неког другог непримарног атрибута, кажемо да је релација у <input class='fill-in-input' size='7' data-correct='трећој'> нормалној форми.`,
        options: [],
        correctAnswer: ["трећој"],
        points: 1,
        type: 'fill-in'
    },
    {
        id: 250,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Логичке операције',
        tags: ['logičke operacije', 'prioritet', 'SQL'],
        question: `Написати на цртама испред логичких операција редне бројеве њихових приоритета:<br><br>
    1. највиши приоритет <input class='fill-in-input' size='1' data-correct='3'> OR<br>
    2. средњи приоритет <input class='fill-in-input' size='1' data-correct='1'> NOT<br>
    3. најнижи приоритет <input class='fill-in-input' size='1' data-correct='2'> AND`,
        options: [],
        correctAnswer: ["3", "1", "2"],
        points: 1.5,
        type: 'fill-in'
    },
    {
        id: 251,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'WHERE клаузула',
        tags: ['SQL', 'WHERE', 'LIKE', 'matching'],
        question: `Дата је табела <b>GEOGRAFIJA</b> која поред осталих података садржи називе градoва и држава (Naziv nvarchar(50)). У зависности од услова у WHERE клаузули, SELECT упитом се приказују географски појмови из табеле. Са леве стране су дати услови нумерисани бројевима од 1 до 5, а са десне групе градова.<br>
    Свакој групи градова придружити по један услов уносом редног броја којим је услов нумерисан на линију испред листе градова:<br><br>
    1. where Naziv like 'L__ %' <input class='fill-in-input' size='1' data-correct='3'> SIJERA LEONE, SVETA LUCIJA<br>
    2. where Naziv like '__ %N%' <input class='fill-in-input' size='1' data-correct='5'> LA VALETA, LA KORUNJA<br>
    3. where Naziv like '% L%' <input class='fill-in-input' size='1' data-correct='2'> EL RENO, LA KORUNJA<br>
    4. where Naziv like '_L%' <input class='fill-in-input' size='1' data-correct='4'> EL SALVADOR, EL RENO<br>
    5. where Naziv like '__ %A' <input class='fill-in-input' size='1' data-correct='1'> LAS VEGAS, LOS ANGELES`,
        options: [],
        correctAnswer: ["3", "5", "2", "4", "1"],
        points: 2.5,
        type: 'fill-in'
    },
    {
        id: 252,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'Кардиналност',
        tags: ['baze podataka', 'kardinalnost', 'matching'],
        question: `Исписати на цртама испред релација редни број под којим је наведена одговарајућа кардиналност везе:<br><br>
    1. 1 : 1 <input class='fill-in-input' size='1' data-correct='2'> ВЛАСНИК – БРОЈ ТЕЛЕФОНА<br>
    2. 1 : M <input class='fill-in-input' size='1' data-correct='3'> НАСТАВНИК – ПРЕДМЕТ<br>
    3. M : M <input class='fill-in-input' size='1' data-correct='1'> ОСОБА – ПАСОШ<br>
     <input class='fill-in-input' size='1' data-correct='3'> КУПАЦ – МОДЕЛ АУТОМОБИЛА<br>
     <input class='fill-in-input' size='1' data-correct='1'> УТАКМИЦА – ГРАД ДОМАЋИН`,
        options: [],
        correctAnswer: ["2", "3", "1", "3", "1"],
        points: 2.5,
        type: 'fill-in'
    },
    {
        id: 253,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'SQL упити',
        tags: ['SQL', 'clause order', 'matching'],
        question: `Уписати редни број почев од 1 на линији испред резервисане речи тако да одговара редоследу навођења при формирању упита.<br>
    За формирање упита за издавање дела података из табеле која се налази у оквиру базе података користе се клаузуле у следећем редоследу:<br>
    <input class='fill-in-input' size='1' data-correct='4'> GROUP BY<br>
    <input class='fill-in-input' size='1' data-correct='3'> WHERE<br>
    <input class='fill-in-input' size='1' data-correct='1'> SELECT<br>
    <input class='fill-in-input' size='1' data-correct='5'> ORDER BY<br>
    <input class='fill-in-input' size='1' data-correct='2'> FROM`,
        options: [],
        correctAnswer: ["4", "3", "1", "5", "2"],
        points: 3,
        type: 'fill-in'
    },
    {
        id: 254,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'JOIN',
        tags: ['SQL', 'JOIN', 'matching'],
        question: `
    <div style="display: flex; gap: 32px; justify-content: center; margin-bottom: 16px;">
        <table border="1" style="border-collapse:collapse; font-size: 15px;">
            <tr><th>IDBR</th><th>IME</th><th>PREZIME</th><th>PLATA</th><th>BROD</th></tr>
            <tr><td>5900</td><td>Slobodan</td><td>Golubović</td><td>900</td><td>10</td></tr>
            <tr><td>5932</td><td>Mitar</td><td>Gavrilović</td><td>600</td><td></td></tr>
            <tr><td>5953</td><td>Persida</td><td>Kosanović</td><td>1100</td><td>20</td></tr>
            <tr><td>6234</td><td>Marko</td><td>Pavlović</td><td>1300</td><td>30</td></tr>
            <tr><td>6789</td><td>Janko</td><td>Nikolić</td><td>800</td><td>10</td></tr>
        </table>
        <table border="1" style="border-collapse:collapse; font-size: 15px;">
            <tr><th>BROD</th><th>IMEOD</th><th>MESTO</th></tr>
            <tr><td>50</td><td>Skladišta</td><td>Zemun</td></tr>
            <tr><td>30</td><td>Marketing</td><td>Vračar</td></tr>
            <tr><td>10</td><td>Plasman</td><td>Surčin</td></tr>
            <tr><td>20</td><td>Direkcija</td><td>Grocka</td></tr>
            <tr><td>40</td><td>Nabavka</td><td>Barajevo</td></tr>
        </table>
    </div>
        <div style="margin-bottom: 18px; font-size: 18px; font-weight: bold; text-align: center;">
        Повезати упите и њихова значења уписом броја упита на одговарајућу линију:
        </div>
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 1080px; margin: 0 auto;">
        <div style="display: flex; flex-direction: row; align-items: flex-start; gap: 18px;">
            <div style="min-width: 28px; font-size: 18px; font-weight: bold; margin-top: 2px;">1.</div>
            <pre style="margin:0; font-size: 16px; background: #f8f8f8; border-radius: 4px; padding: 6px 12px 6px 12px; min-width: 340px; max-width: 340px; font-family: 'Consolas', 'monospace'; white-space: pre;">
    <span class="code-keyword">SELECT</span> odeljenje.imeod,
           radnik.prezime
    <span class="code-keyword">FROM</span> odeljenje <span class="code-keyword">INNER JOIN</span> radnik
    <span class="code-keyword">ON</span> radnik.brod = odeljenje.brod</pre>
            <div style="display: flex; align-items: center; min-width: 40px; justify-content: center;">
                <input class='fill-in-input' size='1' data-correct='3' style="font-size: 18px; text-align: center;">
            </div>
            <div style="min-width: 340px; font-size: 16px;">
                Приказује све раднике (и који јесу и који нису распоређени у одељења) и само она одељења у којима има радника
                </div>
                </div>
        <div style="display: flex; flex-direction: row; align-items: flex-start; gap: 18px;">
            <div style="min-width: 28px; font-size: 18px; font-weight: bold; margin-top: 2px;">2.</div>
            <pre style="margin:0; font-size: 16px; background: #f8f8f8; border-radius: 4px; padding: 6px 12px 6px 12px; min-width: 340px; max-width: 340px; font-family: 'Consolas', 'monospace'; white-space: pre;">
    <span class="code-keyword">SELECT</span> odeljenje.imeod,
           radnik.prezime
    <span class="code-keyword">FROM</span> odeljenje <span class="code-keyword">LEFT JOIN</span> radnik
    <span class="code-keyword">ON</span> radnik.brod = odeljenje.brod</pre>
            <div style="display: flex; align-items: center; min-width: 40px; justify-content: center;">
                <input class='fill-in-input' size='1' data-correct='1' style="font-size: 18px; text-align: center;">
                </div>
            <div style="min-width: 340px; font-size: 16px;">
                Приказује само одељења у којима има радника и само раднике распоређене у одељењима
                </div>
                </div>
        <div style="display: flex; flex-direction: row; align-items: flex-start; gap: 18px;">
            <div style="min-width: 28px; font-size: 18px; font-weight: bold; margin-top: 2px;">3.</div>
            <pre style="margin:0; font-size: 16px; background: #f8f8f8; border-radius: 4px; padding: 6px 12px 6px 12px; min-width: 340px; max-width: 340px; font-family: 'Consolas', 'monospace'; white-space: pre;">
    <span class="code-keyword">SELECT</span> odeljenje.imeod,
           radnik.prezime
    <span class="code-keyword">FROM</span> odeljenje <span class="code-keyword">RIGHT JOIN</span> radnik
    <span class="code-keyword">ON</span> radnik.brod = odeljenje.brod</pre>
            <div style="display: flex; align-items: center; min-width: 40px; justify-content: center;">
                <input class='fill-in-input' size='1' data-correct='2' style="font-size: 18px; text-align: center;">
            </div>
            <div style="min-width: 340px; font-size: 16px;">
                Приказује сва одељења (и она у којима има и она у којима нема радника) и само оне раднике који су распоређени у одељења
                </div>
            </div>
        </div>
        `,
        options: [],
        correctAnswer: ["3", "1", "2"],
        points: 3,
        type: 'fill-in'
    },
    {
        id: 255,
        question: `
        <div style="margin-bottom: 18px; font-size: 18px; font-weight: bold; text-align: center;">
            Дата је табела <i>RADNIK</i>, табела <i>ODELJENJE</i> и упит:
        </div>
        <div style="display: flex; flex-direction: row; justify-content: center; gap: 32px; margin-bottom: 18px;">
            <table style="border-collapse: collapse; font-size: 15px; min-width: 320px;">
                <tr>
                    <th style="border: 1px solid #aaa; padding: 2px 8px;">IDBR</th>
                    <th style="border: 1px solid #aaa; padding: 2px 8px;">IME</th>
                    <th style="border: 1px solid #aaa; padding: 2px 8px;">PREZIME</th>
                    <th style="border: 1px solid #aaa; padding: 2px 8px;">PLATA</th>
                    <th style="border: 1px solid #aaa; padding: 2px 8px;">BROD</th>
                </tr>
                <tr><td style="border: 1px solid #aaa; padding: 2px 8px;">5900</td><td style="border: 1px solid #aaa; padding: 2px 8px;">Slobodan</td><td style="border: 1px solid #aaa; padding: 2px 8px;">Golubović</td><td style="border: 1px solid #aaa; padding: 2px 8px;">900</td><td style="border: 1px solid #aaa; padding: 2px 8px;">10</td></tr>
                <tr><td style="border: 1px solid #aaa; padding: 2px 8px;">5932</td><td style="border: 1px solid #aaa; padding: 2px 8px;">Mitar</td><td style="border: 1px solid #aaa; padding: 2px 8px;">Gavrilović</td><td style="border: 1px solid #aaa; padding: 2px 8px;">600</td><td style="border: 1px solid #aaa; padding: 2px 8px;"></td></tr>
                <tr><td style="border: 1px solid #aaa; padding: 2px 8px;">5953</td><td style="border: 1px solid #aaa; padding: 2px 8px;">Persida</td><td style="border: 1px solid #aaa; padding: 2px 8px;">Kosanović</td><td style="border: 1px solid #aaa; padding: 2px 8px;">1100</td><td style="border: 1px solid #aaa; padding: 2px 8px;">20</td></tr>
                <tr><td style="border: 1px solid #aaa; padding: 2px 8px;">6234</td><td style="border: 1px solid #aaa; padding: 2px 8px;">Marko</td><td style="border: 1px solid #aaa; padding: 2px 8px;">Pavlović</td><td style="border: 1px solid #aaa; padding: 2px 8px;">1300</td><td style="border: 1px solid #aaa; padding: 2px 8px;">30</td></tr>
                <tr><td style="border: 1px solid #aaa; padding: 2px 8px;">6789</td><td style="border: 1px solid #aaa; padding: 2px 8px;">Janko</td><td style="border: 1px solid #aaa; padding: 2px 8px;">Nikolić</td><td style="border: 1px solid #aaa; padding: 2px 8px;">800</td><td style="border: 1px solid #aaa; padding: 2px 8px;">10</td></tr>
            </table>
            <table style="border-collapse: collapse; font-size: 15px; min-width: 320px;">
                <tr>
                    <th style="border: 1px solid #aaa; padding: 2px 8px;">BROD</th>
                    <th style="border: 1px solid #aaa; padding: 2px 8px;">IMEOD</th>
                    <th style="border: 1px solid #aaa; padding: 2px 8px;">MESTO</th>
                </tr>
                <tr><td style="border: 1px solid #aaa; padding: 2px 8px;">50</td><td style="border: 1px solid #aaa; padding: 2px 8px;">Skladišta</td><td style="border: 1px solid #aaa; padding: 2px 8px;">Zemun</td></tr>
                <tr><td style="border: 1px solid #aaa; padding: 2px 8px;">30</td><td style="border: 1px solid #aaa; padding: 2px 8px;">Marketing</td><td style="border: 1px solid #aaa; padding: 2px 8px;">Vračar</td></tr>
                <tr><td style="border: 1px solid #aaa; padding: 2px 8px;">10</td><td style="border: 1px solid #aaa; padding: 2px 8px;">Plasman</td><td style="border: 1px solid #aaa; padding: 2px 8px;">Surčin</td></tr>
                <tr><td style="border: 1px solid #aaa; padding: 2px 8px;">20</td><td style="border: 1px solid #aaa; padding: 2px 8px;">Direkcija</td><td style="border: 1px solid #aaa; padding: 2px 8px;">Grocka</td></tr>
                <tr><td style="border: 1px solid #aaa; padding: 2px 8px;">40</td><td style="border: 1px solid #aaa; padding: 2px 8px;">Nabavka</td><td style="border: 1px solid #aaa; padding: 2px 8px;">Barajevo</td></tr>
            </table>
        </div>
        <div style="margin-bottom: 18px; font-size: 18px; font-weight: bold; text-align: center;">
            Повезати упите и њихова значења уписом броја датог испред описа значења упита на одговарајућу линију:
            </div>
        <div style="display: flex; flex-direction: row; gap: 32px; max-width: 1200px; margin: 0 auto;">
            <div style="display: flex; flex-direction: column; gap: 24px; flex: 1;">
                <div style="display: flex; flex-direction: row; align-items: flex-start; gap: 18px;">
                    <div style="display: flex; flex-direction: column; align-items: center; min-width: 40px;">
                        <input class='fill-in-input' size='1' data-correct='4' style="font-size: 18px; text-align: center; margin-bottom: 8px;">
                </div>
                    <pre style="margin:0; font-size: 16px; background: #f8f8f8; border-radius: 4px; padding: 6px 12px 6px 12px; min-width: 340px; max-width: 340px; font-family: 'Consolas', 'monospace'; white-space: pre;">
    SELECT odeljenje.imeod,
           radnik.prezime
    FROM odeljenje LEFT JOIN radnik
    ON radnik.brod = odeljenje.brod
    WHERE radnik.brod IS NULL</pre>
                </div>
                <div style="display: flex; flex-direction: row; align-items: flex-start; gap: 18px;">
                    <div style="display: flex; flex-direction: column; align-items: center; min-width: 40px;">
                        <input class='fill-in-input' size='1' data-correct='3' style="font-size: 18px; text-align: center; margin-bottom: 8px;">
                </div>
                    <pre style="margin:0; font-size: 16px; background: #f8f8f8; border-radius: 4px; padding: 6px 12px 6px 12px; min-width: 340px; max-width: 340px; font-family: 'Consolas', 'monospace'; white-space: pre;">
    SELECT odeljenje.imeod,
           radnik.prezime
    FROM odeljenje FULL JOIN radnik
    ON radnik.brod = odeljenje.brod</pre>
                </div>
                <div style="display: flex; flex-direction: row; align-items: flex-start; gap: 18px;">
                    <div style="display: flex; flex-direction: column; align-items: center; min-width: 40px;">
                        <input class='fill-in-input' size='1' data-correct='1' style="font-size: 18px; text-align: center; margin-bottom: 8px;">
                    </div>
                    <pre style="margin:0; font-size: 16px; background: #f8f8f8; border-radius: 4px; padding: 6px 12px 6px 12px; min-width: 340px; max-width: 340px; font-family: 'Consolas', 'monospace'; white-space: pre;">
    SELECT odeljenje.imeod,
           radnik.prezime
    FROM odeljenje RIGHT JOIN
    radnik
    ON radnik.brod = odeljenje.brod
    WHERE odeljenje.brod IS NULL</pre>
                </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 24px; flex: 1; font-size: 16px;">
                <div>1. Приказује само раднике који нису распоређени у одељења</div>
                <div>2. Приказује све раднике (и који јесу и који нису распоређени у одељења) и само она одељења у којима има радника</div>
                <div>3. Приказује сва одељења - и она у којима имa и оне у којима нема радника и све раднике – и оне који су распоређени у одељења, као и оне који нису распоређени</div>
                <div>4. Приказује само одељења у којима нема радника</div>
            </div>
        </div>
        `,
        options: [],
        correctAnswer: ["4", "3", "1"],
        points: 3,
        type: 'fill-in'
    },
    {
        id: 256,
        question: `
        <div style="margin-bottom: 18px; font-size: 18px; font-weight: bold; text-align: center;">
            На левој страни су наведене категорије SQL команди, а са десне су набројане команде.<br>
            На линији испред команде уписати број под којим је наведена категорија којој команда припада:
        </div>
        <div style="display: flex; flex-direction: row; gap: 32px; max-width: 900px; margin: 0 auto;">
            <div style="flex: 1;">
                <div style="margin-bottom: 8px;">1. DDL – Data Definition Language</div>
                <div style="margin-bottom: 8px;">2. DML – Data Manipulation Language</div>
                <div style="margin-bottom: 8px;">3. DCL – Data Control Language</div>
                <div style="margin-bottom: 8px;">4. TCL – Transaction Control Language</div>
            </div>
            <div style="flex: 1;">
                <div style="display: flex; align-items: center; margin-bottom: 8px;">
                    <input class='fill-in-input' size='1' data-correct='3' style="font-size: 18px; text-align: center; margin-right: 8px;">
                    GRANT
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px;">
                    <input class='fill-in-input' size='1' data-correct='2' style="font-size: 18px; text-align: center; margin-right: 8px;">
                    UPDATE
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px;">
                    <input class='fill-in-input' size='1' data-correct='4' style="font-size: 18px; text-align: center; margin-right: 8px;">
                    COMMIT
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px;">
                    <input class='fill-in-input' size='1' data-correct='1' style="font-size: 18px; text-align: center; margin-right: 8px;">
                    DROP
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px;">
                    <input class='fill-in-input' size='1' data-correct='2' style="font-size: 18px; text-align: center; margin-right: 8px;">
                    DELETE
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 8px;">
                    <input class='fill-in-input' size='1' data-correct='1' style="font-size: 18px; text-align: center; margin-right: 8px;">
                    ALTER
                </div>
            </div>
        </div>
        `,
        options: [],
        correctAnswer: ["3", "2", "4", "1", "2", "1"],
        points: 6,
        type: 'fill-in'
    },
    {
        id: 257,
        group: 'БАЗЕ ПОДАТАКА',
        lecture: 'SQL',
        tags: ['SQL', 'SUBQUERY'],
        question: `
        <div style="margin-bottom: 18px; font-size: 18px; font-weight: bold; text-align: center;">
            Табела ZAPOSLENI је креирана и попуњена извршавањем следећih наредbi:
        </div>
        <pre style="margin:0 auto 18px auto; font-size: 16px; background: #f8f8f8; border-radius: 4px; padding: 12px; max-width: 600px; font-family: 'Consolas', 'monospace'; white-space: pre-wrap;">
<span class="code-keyword">create</span> <span class="code-keyword">TABLE</span> zaposleni(
    id <span class="code-keyword">INTEGER NOT NULL</span> <span class="code-keyword">PRIMARY KEY</span>, rukovodilacId <span class="code-keyword">INTEGER</span>, ime <span class="code-keyword">VARCHAR</span>(30)
    <span class="code-keyword">NOT NULL</span>,
    <span class="code-keyword">FOREIGN KEY</span> (rukovodilacId) <span class="code-keyword">REFERENCES</span> zaposleni(id)
);

<span class="code-keyword">INSERT INTO</span> zaposleni <span class="code-keyword">VALUES</span>(1, <span class="code-keyword">NULL</span>, 'Petar');
<span class="code-keyword">INSERT INTO</span> zaposleni <span class="code-keyword">VALUES</span>(2, 1, 'Mihajlo');
<span class="code-keyword">INSERT INTO</span> zaposleni <span class="code-keyword">VALUES</span>(3, 2, 'Milica');
<span class="code-keyword">INSERT INTO</span> zaposleni <span class="code-keyword">VALUES</span>(4, 3, 'Lazar');
<span class="code-keyword">INSERT INTO</span> zaposleni <span class="code-keyword">VALUES</span>(5, <span class="code-keyword">NULL</span>, 'Sofija');</pre>
        <div style="margin-bottom: 18px; font-size: 18px; font-weight: bold; text-align: center;">
            Очекивани ефекти извршења упита нумерисани су бројевима од 1 до 6. Уносом редног броја одговарајућег описа на предвиђену линију испред упита, повезати упит и опис резултата његовог извршења:
        </div>
        <div style="display: flex; flex-direction: row; gap: 32px; max-width: 1080px; margin: 0 auto; margin-bottom: 24px;">
            <div style="flex: 1; display: flex; flex-direction: column; gap: 8px; font-size: 16px;">
                <div>1. Сви радници који су руководиоци неком другом раднику</div>
                <div>2. Сви радници који нису руководиоци ником</div>
                <div>3. Сви радници који немају надређене руководиоце</div>
                <div>4. Сви радници који имају надређеног руководиоца</div>
                <div>5. Празна табела</div>
            </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 24px; max-width: 1080px; margin: 0 auto;">
            <div style="display: flex; flex-direction: row; align-items: flex-start; gap: 18px;">
                <div style="display: flex; align-items: center; min-width: 40px; justify-content: center;">
                    <input class='fill-in-input' size='1' data-correct='5' style="font-size: 18px; text-align: center;">
                </div>
                <pre style="margin:0; font-size: 16px; background: #f8f8f8; border-radius: 4px; padding: 6px 12px 6px 12px; min-width: 100px; flex-grow: 1; font-family: 'Consolas', 'monospace'; white-space: pre-wrap;">
    <span class="code-keyword">select</span> * <span class="code-keyword">from</span> zaposleni
    <span class="code-keyword">where</span> id <span class="code-keyword">not in</span> (<span class="code-keyword">select distinct</span> rukovodilacId <span class="code-keyword">from</span> zaposleni)</pre>
            </div>
            <div style="display: flex; flex-direction: row; align-items: flex-start; gap: 18px;">
                <div style="display: flex; align-items: center; min-width: 40px; justify-content: center;">
                    <input class='fill-in-input' size='1' data-correct='2' style="font-size: 18px; text-align: center;">
                </div>
                <pre style="margin:0; font-size: 16px; background: #f8f8f8; border-radius: 4px; padding: 6px 12px 6px 12px; min-width: 100px; flex-grow: 1; font-family: 'Consolas', 'monospace'; white-space: pre-wrap;">
    <span class="code-keyword">select</span> * <span class="code-keyword">from</span> zaposleni
    <span class="code-keyword">where</span> id <span class="code-keyword">not in</span>
    (<span class="code-keyword">select</span> rukovodilacId <span class="code-keyword">from</span> zaposleni <span class="code-keyword">where</span> rukovodilacId <span class="code-keyword">is not null</span>)</pre>
            </div>
            <div style="display: flex; flex-direction: row; align-items: flex-start; gap: 18px;">
                <div style="display: flex; align-items: center; min-width: 40px; justify-content: center;">
                    <input class='fill-in-input' size='1' data-correct='3' style="font-size: 18px; text-align: center;">
                </div>
                <pre style="margin:0; font-size: 16px; background: #f8f8f8; border-radius: 4px; padding: 6px 12px 6px 12px; min-width: 100px; flex-grow: 1; font-family: 'Consolas', 'monospace'; white-space: pre-wrap;">
    <span class="code-keyword">select</span> * <span class="code-keyword">from</span> zaposleni <span class="code-keyword">where</span> rukovodilacId <span class="code-keyword">is null</span></pre>
            </div>
        </div>
        `,
        options: [],
        correctAnswer: ["5", "2", "3"],
        points: 3,
        type: 'fill-in'
    },
]; // Closing bracket for questionData

class QuizApp {
    constructor(questions) {
        this.currentQuestion = 0;
        this.score = 0;
        this.flaggedQuestions = new Set();
        this.filteredQuestions = questions;
        this.userAnswers = {};
        this.initializeElements();
        this.setupEventListeners();
        this.loadQuestion();
        
        // Initialize userAnswers from sessionStorage if available
        const savedAnswers = sessionStorage.getItem('userAnswers');
        this.userAnswers = savedAnswers ? JSON.parse(savedAnswers) : {};
        
        // Add event listener for page unload to clean up
        window.addEventListener('beforeunload', () => {
            sessionStorage.removeItem('userAnswers');
        });
    }

    initializeElements() {
        // Initialize all DOM elements
        this.pointsDisplay = document.getElementById('questionPoints'); // Now displays points for the current question
        this.questionText = document.getElementById('questionText');
        this.imageContainer = document.getElementById('imageContainer');
        this.optionsContainer = document.getElementById('options');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.showAnswerBtn = document.getElementById('showAnswerBtn');
        this.exitBtn = document.getElementById('exitBtn');
        this.flagBtn = document.getElementById('flagQuestion');

        // Correctly initialize question number elements
        this.currentQuestionNumber = document.getElementById('currentQuestionNumber');
        this.totalQuestions = document.getElementById('totalQuestions');
        
        // Initialize Summary and Back buttons
        this.summaryBtn = document.getElementById('summaryBtn');
        this.backToQuizBtn = document.getElementById('backToQuizBtn');
        
        // Initialize Summary and Quiz containers
        this.summaryContainer = document.getElementById('summary');
        this.quizMainContainer = document.querySelector('.container'); // Assuming the main quiz content is in .container
        this.summaryTableBody = document.querySelector('#summaryContent tbody'); // Initialize table body

        // Initialize total score display element
        this.totalScoreDisplay = document.getElementById('totalScore');
        // Initialize question ID display element
        this.questionIdDisplay = document.getElementById('questionIdDisplay');
    }

    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.showAnswerBtn.addEventListener('click', () => this.showAnswer());
        this.exitBtn.addEventListener('click', () => window.location.href = 'landing.html');
        this.flagBtn.addEventListener('click', () => this.toggleFlag());
        
        // Add event listener for the Summary button
        if (this.summaryBtn) {
            this.summaryBtn.addEventListener('click', () => this.showSummary());
        }
        
        // Add event listener for the Back button in the summary
        if (this.backToQuizBtn) {
            this.backToQuizBtn.addEventListener('click', () => this.hideSummary());
        }
    }

    loadQuestion() {
        const question = this.filteredQuestions[this.currentQuestion];
        if (!question) return;

        // Update progress
        this.updateProgress();

        // Display question ID
        if (this.questionIdDisplay) {
            this.questionIdDisplay.textContent = question.id;
        }

        // Display points for the current question
        if (this.pointsDisplay) {
            this.pointsDisplay.textContent = question.points.toFixed(2); // Display points with 2 decimal places
        }

        // Load image if exists
        this.imageContainer.innerHTML = question.image ? 
            `<img src="${question.image}" alt="Question Image">` : '';

        // Clear previous options/inputs
        this.optionsContainer.innerHTML = '';

        // Set question text - Use innerHTML to interpret HTML tags
        this.questionText.innerHTML = question.question;

        if (question.type === 'fill-in') {
            // Handle fill-in questions
            const inputElements = this.questionText.querySelectorAll('.fill-in-input');
            
            // Initialize or restore user answer for this question
            if (!this.userAnswers[question.id]) {
                this.userAnswers[question.id] = {
                    selectedAnswer: Array(inputElements.length).fill(''),
                    awardedPoints: 0,
                    answerRevealed: false
                };
            }
            
            // Restore saved answers to input fields
            inputElements.forEach((inputElement, index) => {
                const savedAnswer = this.userAnswers[question.id].selectedAnswer[index];
                if (savedAnswer !== undefined) {
                    inputElement.value = savedAnswer;
                }
                
                // Ensure user's previous input if available
                if (this.userAnswers[question.id].selectedAnswer[index] !== undefined) {
                    inputElement.value = String(this.userAnswers[question.id].selectedAnswer[index]);
                } else {
                    inputElement.value = '';
                }
                
                // Apply initial feedback or answer coloring based on answerRevealed state
                // Ensure the indicator span exists for each input
                let indicator = inputElement.nextElementSibling;
                if (!indicator || !indicator.classList.contains('fill-in-indicator')) {
                    indicator = document.createElement('span');
                    indicator.classList.add('fill-in-indicator');
                    inputElement.parentNode.insertBefore(indicator, inputElement.nextSibling);
                }

                if (this.userAnswers[question.id].answerRevealed) {
                    this.applyAnswerColoring(question, this.userAnswers[question.id]);
                } else {
                    this.applyFeedbackColoring(question, this.userAnswers[question.id]);
                }

                // Add event listener to save user input and provide real-time feedback
                inputElement.addEventListener('input', () => {
                    // Update the specific input value in the userAnswer array
                    this.userAnswers[question.id].selectedAnswer[index] = inputElement.value.trim();
                    
                    // Save to sessionStorage after each input change
                    this.saveAnswersToStorage();
                    
                    // Apply coloring and update indicator
                    this.applyFeedbackColoring(question, this.userAnswers[question.id]);
                    
                    // Clear answer revealed flag on input
                    this.userAnswers[question.id].answerRevealed = false;
                });
                
                // Recalculate awarded points when user leaves an input field
                inputElement.addEventListener('blur', () => {
                    // Update the specific input value in the userAnswer array
                    this.userAnswers[question.id].selectedAnswer[index] = inputElement.value.trim();
                    
                    // Save to sessionStorage after blur
                    this.saveAnswersToStorage();
                    
                    // Recalculate points
                    this.userAnswers[question.id].awardedPoints = this.checkAnswerCorrectness(question, this.userAnswers[question.id].selectedAnswer);
                    this.updateProgress();
                });
            });
        } else {
            // Handle multiple choice and single choice questions
            const isMultipleChoice = Array.isArray(question.correctAnswer);

            question.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';

                const inputType = isMultipleChoice ? 'checkbox' : 'radio';
                const inputName = isMultipleChoice ? `answer-${question.id}` : 'answer';

                // Remove code-keyword span from options if present (specifically for question 24 based on feedback)
                let displayOption = option;
                if (question.id === 24) { // Check specific question ID
                    displayOption = displayOption.replace(/<span class="code-keyword">/g, '').replace(/<\/span>/g, '');
                }

                optionElement.innerHTML = `
                        <input type="${inputType}" name="${inputName}" value="${index}">
                        <label>${displayOption}</label>
                    `;

                const inputElement = optionElement.querySelector(`input[type="${inputType}"]`);

                // Check if user previously answered this question and pre-select inputs
                const userAnswer = this.userAnswers[question.id];
                if (userAnswer) {
                    if (isMultipleChoice && Array.isArray(userAnswer.selectedAnswer)) {
                        if (userAnswer.selectedAnswer.includes(index)) {
                            inputElement.checked = true;
                        }
                    } else if (!isMultipleChoice && userAnswer.selectedAnswer === index) {
                        inputElement.checked = true;
                    }
                }

                // Add event listener to the option element to toggle the input and trigger logic
                optionElement.addEventListener('click', (e) => {
                    // For radio buttons, prevent deselection via click on the label/div
                    if (!isMultipleChoice && inputElement.checked) return; // If already checked, do nothing on radio click

                    // Toggle checked state for checkbox, always check for radio
                    if (isMultipleChoice) {
                        inputElement.checked = !inputElement.checked;
                    } else {
                        inputElement.checked = true; // Ensure radio button gets checked on click
                    }

                    if (isMultipleChoice) {
                        this.handleCheckboxChange(question.id, index, inputElement.checked); // Pass checked state
                    } else {
                        // For radio, ensure only one is selected
                        Array.from(this.optionsContainer.querySelectorAll('input[type="radio"]')).forEach(radio => {
                            if (radio !== inputElement) radio.checked = false;
                        });
                        this.handleRadioChange(question.id, index);
                    }
                    // Apply coloring immediately upon selection/deselection based on the user's current choice(s)
                    this.applyFeedbackColoring(question, this.userAnswers[question.id]);
                });

                // Add separate click handler for the input (both checkbox and radio)
                inputElement.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent the option element click handler from firing
                    
                    if (isMultipleChoice) {
                        this.handleCheckboxChange(question.id, index, inputElement.checked);
                        this.applyFeedbackColoring(question, this.userAnswers[question.id]);
                    } else {
                        // For radio buttons
                        Array.from(this.optionsContainer.querySelectorAll('input[type="radio"]')).forEach(radio => {
                            if (radio !== inputElement) radio.checked = false;
                        });
                        this.handleRadioChange(question.id, index);
                        this.applyFeedbackColoring(question, this.userAnswers[question.id]);
                    }
                });

                this.optionsContainer.appendChild(optionElement);
            });
        }

        // Apply coloring based on the current state (selected, answered, etc.)
        // If the user has revealed the answer (e.g., clicked Show Answer), show the final state
        // Otherwise, show feedback coloring based on current selections
        const userAnswer = this.userAnswers[question.id];

        // Check if the answer has been revealed (e.g., by clicking Show Answer)
        const answerRevealed = userAnswer && userAnswer.answerRevealed;

        if (answerRevealed) {
            this.applyAnswerColoring(question, userAnswer); // Show correct/incorrect highlighting and correct answers
        } else {
            // For non-fill-in questions, clear previous coloring if not answered
            if (question.type !== 'fill-in') {
                this.clearOptionColoring();
            }
            this.applyFeedbackColoring(question, userAnswer); // Show real-time feedback indicators
        }

        // Update flag button
        this.flagBtn.classList.toggle('flagged', this.flaggedQuestions.has(question.id));

        // Update navigation buttons
        this.prevBtn.disabled = this.currentQuestion === 0;
        this.nextBtn.disabled = this.currentQuestion === this.filteredQuestions.length - 1;
    }

    // Handle checkbox changes
    handleCheckboxChange(questionId, selectedIndex, isChecked) {
        const question = this.filteredQuestions[this.currentQuestion];
        let userAnswer = this.userAnswers[questionId];

        if (!userAnswer) {
            userAnswer = { selectedAnswer: [], awardedPoints: 0, answerRevealed: false }; // Initialize awardedPoints and answerRevealed
            this.userAnswers[questionId] = userAnswer;
        }

        const selectedIndexPos = userAnswer.selectedAnswer.indexOf(selectedIndex);

        if (isChecked && selectedIndexPos === -1) {
            userAnswer.selectedAnswer.push(selectedIndex);
        } else if (!isChecked && selectedIndexPos !== -1) {
            userAnswer.selectedAnswer.splice(selectedIndexPos, 1);
        }

        userAnswer.selectedAnswer.sort((a, b) => a - b);

        // Calculate awarded points based on current selection state
        userAnswer.awardedPoints = this.checkAnswerCorrectness(question, userAnswer.selectedAnswer);
        this.updateProgress();
        // Coloring is now handled by the click event listener calling applyFeedbackColoring
        
        // Save to sessionStorage after change
        this.saveAnswersToStorage();
    }

    // Handle radio changes
    handleRadioChange(questionId, selectedIndex) {
        const question = this.filteredQuestions[this.currentQuestion];
        this.userAnswers[questionId] = {
            selectedAnswer: selectedIndex,
            awardedPoints: this.checkAnswerCorrectness(question, selectedIndex),
            answerRevealed: false
        };
        this.updateProgress();
        // Apply feedback coloring immediately after selection
        this.applyFeedbackColoring(question, this.userAnswers[questionId]);
        
        // Save to sessionStorage after change
        this.saveAnswersToStorage();
    }

    // Check answer correctness and return points
    checkAnswerCorrectness(question, selectedAnswer) {
        if (question.type === 'fill-in') {
            // For fill-in-the-blank
            const inputElements = this.questionText.querySelectorAll('.fill-in-input');
            // Ensure selectedAnswer array is valid and has the correct number of elements
            if (!Array.isArray(selectedAnswer) || selectedAnswer.length !== inputElements.length) {
                return 0; // Return 0 if the number of inputs doesn't match expected answers
            }

            let correctlyFilledCount = 0;
            const totalBlanks = inputElements.length;
            if (totalBlanks === 0) return 0; // Avoid division by zero

            // Iterate through input fields and compare user's input with data-correct attribute
            for (let i = 0; i < totalBlanks; i++) {
                const inputElement = inputElements[i];
                const rawCorrectAnswer = inputElement.getAttribute('data-correct');
                const userAnswer = selectedAnswer[i];

                // Decode HTML entities in both the correct answer and user input for accurate comparison
                const tempElement = document.createElement('div');
                tempElement.innerHTML = rawCorrectAnswer;
                const decodedCorrectAnswer = tempElement.textContent;

                // Create another temp element for user input to handle any HTML entities
                const userTempElement = document.createElement('div');
                userTempElement.innerHTML = userAnswer;
                const decodedUserAnswer = userTempElement.textContent;

                // Compare the decoded answers
                if (decodedUserAnswer.trim().toLowerCase() === decodedCorrectAnswer.trim().toLowerCase()) {
                    correctlyFilledCount++;
                }
            }

            // Award points proportionally only if all correct blanks are filled correctly
            if (correctlyFilledCount === totalBlanks) {
                return question.points;
            } else {
                return 0;
            }
        } else if (Array.isArray(question.correctAnswer)) {
            // For multiple choice
            if (!Array.isArray(selectedAnswer) || selectedAnswer.length === 0) {
                return 0; // No points if nothing selected for multiple choice
            }

            const correctAnswers = question.correctAnswer;
            let correctlySelectedCount = 0;
            let incorrectSelectedCount = 0; // Track incorrect selections

            for (const selectedIndex of selectedAnswer) {
                if (correctAnswers.includes(selectedIndex)) {
                    correctlySelectedCount++;
                } else {
                    incorrectSelectedCount++; // Found an incorrect selection
                }
            }

            // If any incorrect option was selected, award 0 points
            if (incorrectSelectedCount > 0) {
                return 0;
            }

            // If no incorrect options were selected, award points proportionally
            // Ensure all correct answers are selected for full points in multiple choice
            if (correctlySelectedCount === correctAnswers.length && incorrectSelectedCount === 0) {
                return question.points;
            } else {
                 return 0; // Award 0 if not all correct are selected or if any incorrect is selected
            }


        } else {
            // For single choice
            return selectedAnswer === question.correctAnswer ? question.points : 0;
        }
    }

    // Apply coloring based on user's current selection (before revealing the answer)
    applyFeedbackColoring(question, userAnswer) {
         // Clear previous indicators/coloring from ALL inputs (for fill-in)
         // For other types, clear option coloring
         if (question.type === 'fill-in') {
             const inputElements = this.questionText.querySelectorAll('.fill-in-input');
             inputElements.forEach(inputElement => {
                  const indicator = inputElement.nextElementSibling;
                  if(indicator) {
                      indicator.textContent = ''; // Clear indicator text
                      indicator.style.color = '';
                      indicator.style.fontWeight = '';
                  }
                  inputElement.classList.remove('correct', 'incorrect'); // Clear input coloring
             });

         } else {
             const options = this.optionsContainer.children;
             Array.from(options).forEach(option => {
                 option.classList.remove('correct', 'incorrect');
             });
         }

        if (!userAnswer || userAnswer.selectedAnswer === undefined) {
             // If no answer, just clear coloring/indicators and return
             return;
        }

        if (question.type === 'fill-in') {
             const inputElements = this.questionText.querySelectorAll('.fill-in-input');
             inputElements.forEach((inputElement, index) => {
                 const correctAnswer = inputElement.getAttribute('data-correct');
                 // Use the value from the userAnswer.selectedAnswer array for this specific input index
                 const userAnswerValue = userAnswer.selectedAnswer[index] !== undefined ? String(userAnswer.selectedAnswer[index]) : '';
                 const indicator = inputElement.nextElementSibling; // Get the span for the indicator

                 if (indicator) {
                     // Check if user input exists and matches the correct answer for this specific field
                     if (userAnswerValue.trim() !== '') {
                          if (correctAnswer && userAnswerValue.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
                             indicator.textContent = '☑'; // Checkmark for correct
                             indicator.style.color = 'green';
                             indicator.style.fontWeight = 'bold';
                             inputElement.classList.remove('incorrect'); // Remove red coloring if previously incorrect
                             inputElement.classList.add('correct'); // Add green coloring for correct input
                         } else {
                             indicator.textContent = '☒'; // Cross for incorrect
                             indicator.style.color = 'red';
                             indicator.style.fontWeight = 'bold';
                             inputElement.classList.remove('correct'); // Remove green coloring if previously correct
                             inputElement.classList.add('incorrect'); // Add red coloring for incorrect input
                         }
                     } else {
                          // If input is empty, clear indicator and coloring
                          indicator.textContent = '';
                          indicator.style.color = '';
                          indicator.style.fontWeight = '';
                          inputElement.classList.remove('correct', 'incorrect');
                     }
                 }
             });
        } else {
            // Handle multiple choice and single choice feedback coloring
            const isMultipleChoice = Array.isArray(question.correctAnswer);
            const options = this.optionsContainer.children;

            if (isMultipleChoice) {
                // For multiple choice, color each selected option based on its correctness
                if (Array.isArray(userAnswer.selectedAnswer)) {
                    userAnswer.selectedAnswer.forEach(selectedIndex => {
                        const optionElement = options[selectedIndex];
                        if (optionElement) {
                             if (question.correctAnswer.includes(selectedIndex)) {
                                optionElement.classList.add('correct'); // Green for selected correct
                            } else {
                                optionElement.classList.add('incorrect'); // Red for selected incorrect
                            }
                        }
                    });
                }
            } else {
                // For single choice, color only the selected option
                const selectedIndex = userAnswer.selectedAnswer;
                if (selectedIndex !== undefined && options[selectedIndex]) {
                    // For single choice, color selected immediately (green if correct, red if incorrect)
                    if (selectedIndex === question.correctAnswer) {
                        options[selectedIndex].classList.add('correct');
                    } else {
                        options[selectedIndex].classList.add('incorrect');
                    }
                }
            }
        }
    }

    // Apply coloring to reveal the full answer state (after Show Answer or on load if answered)
    applyAnswerColoring(question, userAnswer) {
         // Clear previous feedback indicators/coloring from ALL inputs (for fill-in)
         // For other types, clear option coloring
         if (question.type === 'fill-in') {
              const inputElements = this.questionText.querySelectorAll('.fill-in-input');
              inputElements.forEach(inputElement => {
                   const indicator = inputElement.nextElementSibling;
                   if(indicator) {
                       // Clear feedback indicator text but not the displayed correct answer
                       if (!indicator.textContent.startsWith(' (Тачан:')) {
                            indicator.textContent = '';
                            indicator.style.color = '';
                            indicator.style.fontWeight = '';
                       }
                   }
                  inputElement.classList.remove('correct', 'incorrect'); // Remove coloring classes from inputs
              });

         } else {
              const options = this.optionsContainer.children;
              Array.from(options).forEach(option => {
                  option.classList.remove('correct', 'incorrect');
              });
         }


        const isMultipleChoice = Array.isArray(question.correctAnswer);
        const selectedAnswers = userAnswer ? (Array.isArray(userAnswer.selectedAnswer) ? userAnswer.selectedAnswer : [userAnswer.selectedAnswer]) : [];
        const correctAnswers = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer];

        if (question.type === 'fill-in') {
             // For fill-in: show correct answer next to the input and color the input based on correctness
             const inputElements = this.questionText.querySelectorAll('.fill-in-input');
             inputElements.forEach((inputElement, index) => {
                 const correctAnswer = question.correctAnswer && question.correctAnswer[index] !== undefined ? String(question.correctAnswer[index]) : '';
                 const userAnswerValue = userAnswer && userAnswer.selectedAnswer && userAnswer.selectedAnswer[index] !== undefined ? String(userAnswer.selectedAnswer[index]) : '';
                 const indicator = inputElement.nextElementSibling; // Get the span for the indicator

                 // Color the input field based on correctness if user has entered a value or if showing answer
                 if (userAnswerValue.trim() !== '') {
                     if (correctAnswer && userAnswerValue.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
                         inputElement.classList.add('correct'); // Green background for correct input
                     } else {
                          inputElement.classList.add('incorrect'); // Red background for incorrect non-empty input
                     }
                 } else if (userAnswer && userAnswer.answerRevealed && correctAnswer !== '') {
                      // If user did not enter a value, and the correct answer exists, color the input red (incorrect/unanswered)
                      inputElement.classList.add('incorrect'); // Red background for unanswered field with a correct answer
                 } else if (userAnswer && userAnswer.answerRevealed && correctAnswer === '') {
                      // If no correct answer is defined for this input, and answer is revealed, ensure no coloring
                       inputElement.classList.remove('correct', 'incorrect');
                 }

                 // Display the correct answer next to the input field if not already shown and correct answer exists
                 if (indicator && correctAnswer !== '' && !indicator.textContent.startsWith(' (Тачан:')) {
                     indicator.textContent = ` (Тачан: ${correctAnswer})`;
                     indicator.style.color = 'green';
                     indicator.style.fontWeight = 'bold';
                 } else if (indicator && correctAnswer === '') {
                     // If no correct answer is defined for this input, clear indicator
                     indicator.textContent = '';
                     indicator.style.color = '';
                     indicator.style.fontWeight = '';
                 }
             });

         } else if (isMultipleChoice) {
             // Highlight all correct answers in green
             const options = this.optionsContainer.children; // Ensure options is defined
              // Clear previous coloring before applying new
             Array.from(options).forEach(option => {
                 option.classList.remove('correct', 'incorrect');
             });
             correctAnswers.forEach(correctIndex => {
                 if (options[correctIndex]) {
                     options[correctIndex].classList.add('correct');
                 }
             });
              // Highlight user's selected answers that are incorrect in red
              selectedAnswers.forEach(selectedIndex => {
                  const options = this.optionsContainer.children; // Ensure options is defined
                  if (options[selectedIndex] && !correctAnswers.includes(selectedIndex)) {
                       options[selectedIndex].classList.add('incorrect');
                  }
              });

         } else {
             // For single choice:
             const options = this.optionsContainer.children; // Ensure options is defined
              // Clear previous coloring before applying new
             Array.from(options).forEach(option => {
                 option.classList.remove('correct', 'incorrect');
             });
             // Highlight the correct answer in green
             if (options[correctAnswers[0]]) {
                 options[correctAnswers[0]].classList.add('correct');
             }
             // If user selected an incorrect answer, highlight it in red
             if (selectedAnswers.length > 0 && selectedAnswers[0] !== correctAnswers[0] && options[selectedAnswers[0]]) {
                  options[selectedAnswers[0]].classList.add('incorrect');
             }
         }
         // Set a flag to indicate that the answer has been revealed
         if (userAnswer) {
              userAnswer.answerRevealed = true;
         }
    }

    // Clear all coloring from options - now also clears fill-in indicators/coloring
    clearOptionColoring() {
         const options = this.optionsContainer.children;
         Array.from(options).forEach(option => {
             option.classList.remove('correct', 'incorrect');
         });
         const inputElements = this.questionText.querySelectorAll('.fill-in-input');
         inputElements.forEach(inputElement => {
             inputElement.classList.remove('correct', 'incorrect');
              const indicator = inputElement.nextElementSibling;
              if(indicator) {
                  indicator.textContent = '';
                  indicator.style.color = '';
                  indicator.style.fontWeight = '';
              }
         });
    }

    updateProgress() {
        // Update the current question number and total questions
        if (this.currentQuestionNumber) {
            this.currentQuestionNumber.textContent = this.currentQuestion + 1;
        }
        if (this.totalQuestions) {
            this.totalQuestions.textContent = this.filteredQuestions.length;
        }
        // Calculate total score based on awarded points for each question
        let totalScore = 0;
        for (const q of this.filteredQuestions) {
            const ans = this.userAnswers[q.id];
            // Check if answer exists and has awardedPoints
            if (ans && ans.awardedPoints !== undefined) { // Check if awardedPoints exists
                totalScore += ans.awardedPoints; // Add awarded points
            }
        }
        this.score = totalScore;
        // Update the main score display element (now totalScoreDisplay)
        if(this.totalScoreDisplay) {
             this.totalScoreDisplay.textContent = this.score.toFixed(2); // Display total score with 2 decimal places
        }
    }

    // selectOption method is deprecated
    selectOption(index) {
        console.warn("selectOption is deprecated. Use handleRadioChange/handleCheckboxChange instead.");
    }

    showAnswer() {
        const question = this.filteredQuestions[this.currentQuestion];
        let userAnswer = this.userAnswers[question.id]; // Get user's answer for this question

        // Initialize user answer structure if it doesn't exist with empty strings for each expected input
        const inputElements = this.questionText.querySelectorAll('.fill-in-input');
        if (!userAnswer) {
             userAnswer = { selectedAnswer: Array(inputElements.length).fill(''), awardedPoints: 0, answerRevealed: false };
             this.userAnswers[question.id] = userAnswer;
        } else {
              // Ensure selectedAnswer array has the correct size and fill with current input values or empty strings if necessary
             // Read current values from inputs to ensure latest state is captured
             const currentInputValues = Array.from(inputElements).map(input => String(input.value).trim());
             userAnswer.selectedAnswer = currentInputValues; // Use current input values

             // Ensure other properties exist if not present (shouldn't happen with proper initialization, but for safety)
             if (userAnswer.awardedPoints === undefined) userAnswer.awardedPoints = 0;
             if (userAnswer.answerRevealed === undefined) userAnswer.answerRevealed = false;
        }

        // Set the answer revealed flag
        userAnswer.answerRevealed = true;

        // Apply final coloring and show correct answers for all question types
        this.applyAnswerColoring(question, userAnswer); // applyAnswerColoring now handles displaying correct answer next to input for fill-in

        // Recalculate and update score immediately after showing answer
        userAnswer.awardedPoints = this.checkAnswerCorrectness(question, userAnswer.selectedAnswer);
        this.updateProgress();
        
        // Save to sessionStorage after showing answer
        this.saveAnswersToStorage();
    }

    toggleFlag() {
        const question = this.filteredQuestions[this.currentQuestion];
        if (this.flaggedQuestions.has(question.id)) {
            this.flaggedQuestions.delete(question.id);
        } else {
            this.flaggedQuestions.add(question.id);
        }
        this.flagBtn.classList.toggle('flagged');
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.loadQuestion(); // loadQuestion will handle coloring based on saved answer
        }
    }

    nextQuestion() {
        if (this.currentQuestion < this.filteredQuestions.length - 1) {
            this.currentQuestion++;
            this.loadQuestion(); // loadQuestion will handle coloring based on saved answer
        }
    }

    showSummary() {
        const summary = this.summaryContainer;
        const summaryContentTableBody = this.summaryTableBody;
        const quizContainer = this.quizMainContainer;

        // Clear previous summary content
        if (summaryContentTableBody) {
            summaryContentTableBody.innerHTML = '';
        }

        // Populate the table with filtered questions
        this.filteredQuestions.forEach((question, idx) => {
            const row = document.createElement('tr');

            // Question Number (prikazujemo redni broj u nizu, ne id)
            const questionCell = document.createElement('td');
            questionCell.textContent = `Питање ${idx + 1}`;
            row.appendChild(questionCell);

          // Points Awarded vs Total Points
            const pointsCell = document.createElement('td');
          const userAnswer = this.userAnswers[question.id];
          const awarded = userAnswer && userAnswer.awardedPoints !== undefined ? userAnswer.awardedPoints : 0;
          pointsCell.textContent = `${awarded.toFixed(2)} / ${question.points.toFixed(2)}`; // Display awarded/total points
            row.appendChild(pointsCell);

          // Answered Status (Use icons based on awarded points)
            const answeredCell = document.createElement('td');
            answeredCell.className = 'icon-cell';
            if (userAnswer) {
               if (userAnswer.awardedPoints === question.points) {
                   answeredCell.innerHTML = '<span title="Тачно">☑</span>'; // All points awarded
               } else if (userAnswer.awardedPoints > 0 && userAnswer.awardedPoints < question.points) {
                    answeredCell.innerHTML = '<span title="Делимично тачно">◐</span>'; // Partial points awarded
            } else {
                   // Check if any answer was attempted (relevant for fill-in with multiple blanks)
                   const attempted = question.type === 'fill-in' ?
                       (userAnswer.selectedAnswer ? userAnswer.selectedAnswer.some(ans => String(ans).trim() !== '') : false) :
                       (userAnswer.selectedAnswer !== undefined && userAnswer.selectedAnswer !== null);

                   if (attempted) {
                       answeredCell.innerHTML = '<span title="Нетачно">☒</span>'; // 0 points awarded, but answer attempted
                   } else {
                       answeredCell.innerHTML = '<span title="Није одговорено">☐</span>'; // Not answered at all
                   }
               }
          } else {
              answeredCell.innerHTML = '<span title="Није одговорено">☐</span>'; // Not answered
            }
            row.appendChild(answeredCell);

            // Flagged Status
            const flaggedCell = document.createElement('td');
            flaggedCell.className = 'icon-cell';
            if (this.flaggedQuestions.has(question.id)) {
                flaggedCell.innerHTML = '<span title="Означено">🔖</span>';
            } else {
                flaggedCell.innerHTML = '';
            }
            row.appendChild(flaggedCell);

            if (summaryContentTableBody) {
                summaryContentTableBody.appendChild(row);
            }
        });

        // Hide quiz, show summary
        if (quizContainer) {
            quizContainer.classList.add('hidden');
        }
        if (summary) {
            summary.classList.remove('hidden');
        }
    }

    hideSummary() {
        const summary = this.summaryContainer;
        const quizContainer = this.quizMainContainer;

        // Hide summary, show quiz
        if (summary) {
            summary.classList.add('hidden');
        }
        if (quizContainer) {
             quizContainer.classList.remove('hidden');
        }
         // Optionally, scroll back to the question position
    }

    // Add method to handle flagged questions review
    showFlaggedQuestions() {
        const flaggedQuestions = questionData.filter(q => this.flaggedQuestions.has(q.id));
        
        if (flaggedQuestions.length === 0) {
            alert('No questions flagged for review');
            return;
        }

        this.filteredQuestions = flaggedQuestions;
        this.currentQuestion = 0;
        this.loadQuestion();
    }

    // Add method to save answers to sessionStorage
    saveAnswersToStorage() {
        // Save to sessionStorage instead of localStorage
        sessionStorage.setItem('userAnswers', JSON.stringify(this.userAnswers));
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Check if the current page is index.html before processing URL parameters and potentially redirecting
    if (window.location.pathname.endsWith('/index.html') || window.location.pathname === '/' || window.location.pathname === 'index.html') {
        const urlParams = new URLSearchParams(window.location.search);
        const selectedArea = urlParams.get('area');
        const selectedQuestion = urlParams.get('question');

        // Check if accessed directly without parameters
        if (!selectedArea && !selectedQuestion) {
            window.location.href = 'landing.html'; // Redirect to landing page
            return; // Stop further script execution
        }

        console.log('Selected Area from URL:', selectedArea);

        let initialQuestions = [...questionData]; 

        if (selectedArea) {
            // Filter questions based on the selected area
            initialQuestions = questionData.filter(question => question.group === selectedArea);
        } else if (selectedQuestion) {
             const questionId = parseInt(selectedQuestion, 10);
             const question = questionData.find(q => q.id === questionId);
             if (question) {
                 initialQuestions = [question];
             } else {
                  alert('Question not found!'); // Alert user if question ID is invalid
                  window.location.href = 'question-selection.html'; // Redirect back to selection
                  return; // Stop further execution
             }
        }


        console.log('Initial Questions count after filtering:', initialQuestions.length); // Debugging line
        console.log('Initial Questions:', initialQuestions); // Debugging line

        const app = new QuizApp(initialQuestions);

         // If a specific question was requested, set the current question index
        if (selectedQuestion) {
             const questionId = parseInt(selectedQuestion, 10);
             const foundIndex = app.filteredQuestions.findIndex(q => q.id === questionId);
             if (foundIndex !== -1) {
                 app.currentQuestion = foundIndex;
                 app.loadQuestion(); // Load the specific question
             }
        }

    }
});

// Countdown dates
const examDates = {
    countdown1: new Date('2025-06-17T09:00:00')
};

function updateCountdown() {
    const now = new Date();
    const countdownElement = document.getElementById('countdown1');
    if (!countdownElement) return;

    const examDate = examDates.countdown1;
    const timeLeft = examDate - now;

    if (timeLeft <= 0) {
        countdownElement.innerHTML = '<div class="time"><span>Испит је завршен</span></div>';
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    const daysElement = countdownElement.querySelector('.days');
    const hoursElement = countdownElement.querySelector('.hours');
    const minutesElement = countdownElement.querySelector('.minutes');

    if (daysElement) daysElement.textContent = String(days).padStart(2, '0');
    if (hoursElement) hoursElement.textContent = String(hours).padStart(2, '0');
    if (minutesElement) minutesElement.textContent = String(minutes).padStart(2, '0');
}

// Update countdown every minute
setInterval(updateCountdown, 60000);
// Initial update
updateCountdown(); 