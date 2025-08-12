(function ($) {
  'use strict';

  function documentReady() {
    init();
    addToClipboard();
  }

  function init() {
    console.log('BilitChi Is Ready!');

    function addRow(
      name,
      family,
      idCode,
      birthYear = '',
      birthMonth = '',
      birthDay = ''
    ) {
      const newRow = `
      <tr>
        <td>${name}</td>
        <td>${family}</td>
        <td>${idCode}</td>
        <td>${
          birthYear && birthMonth && birthDay
            ? `${birthYear}/${birthMonth}/${birthDay}`
            : ''
        }</td>
        <td><span class="remove-btn">❌</span></td>
      </tr>
    `;
      $('#resultTable tbody').append(newRow);
    }

    function addRowException(name, family, idCode, birthDate) {
      const newRow = `
      <tr>
        <td>${name}</td>
        <td>${family}</td>
        <td>${idCode}</td>
        <td>${birthDate}</td>
        <td><span class="remove-btn">❌</span></td>
      </tr>
    `;
      $('#resultTable tbody').append(newRow);
    }

    $('#infoForm').submit(function (e) {
      e.preventDefault();
      const name = $('#name').val().trim();
      const family = $('#family').val().trim();
      const idCode = $('#idCode').val().trim();
      const isChild = $('#isChild').is(':checked');

      console.log(isChild);

      if (name && family && idCode) {
        var birthYear = '';
        var birthMonth = '';
        var birthDay = '';

        if (isChild) {
          birthYear = '1401';
          birthMonth = '06';
          birthDay = '25';
        }

        addRow(name, family, idCode, birthYear, birthMonth, birthDay);
        $('#infoForm')[0].reset();
      } else {
        alert('لطفا همه فیلدها را پر کنید');
      }
    });

    $('#loadCSVBulk').click(function () {
      const lines = $('#csvInput').val().trim().split('\n');
      lines.forEach((line) => {
        const parts = line.split(',');
        if (parts.length === 3) {
          const [name, family, idCode] = parts;
          addRow(name.trim(), family.trim(), idCode.trim());
        } else if (parts.length === 4) {
          const [name, family, idCode, date] = parts;
          addRowException(
            name.trim(),
            family.trim(),
            idCode.trim(),
            date.trim()
          );
        } else {
          alert('CSV معتبر نیست');
        }
      });
      $('#csvInput').val('');
    });

    $('#resultTable').on('click', '.remove-btn', function () {
      $(this).closest('tr').remove();
    });

    $('#generateCSV').click(function () {
      let csvText = '';
      $('#resultTable tbody tr').each(function () {
        const cols = $(this).find('td');

        var row =
          [
            $(cols[0]).text().trim(),
            $(cols[1]).text().trim(),
            $(cols[2]).text().trim(),
            $(cols[3]).text().trim(),
          ].join(',') + '\n';

        if ($(cols[3]).text().trim() == '') {
          row =
            [
              $(cols[0]).text().trim(),
              $(cols[1]).text().trim(),
              $(cols[2]).text().trim(),
            ].join(',') + '\n';
        }

        csvText += row;
      });
      $('#exportOutput').val(csvText.trim());
    });
  }

  function addToClipboard() {
    $('#addToClipboard').on('click', () => {
      navigator.clipboard.writeText($('#exportOutput').val()).then(
        () => {
          console.log('در کلیپ برد ذخیره شد');
        },
        () => {
          console.error('خطای شخمی');
        }
      );
    });
  }

  $(document).ready(documentReady);
})(jQuery);
