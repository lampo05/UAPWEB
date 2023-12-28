document.addEventListener('DOMContentLoaded', function () {

    var dataBarang = [{
            kode: '001',
            nama: 'Barang A',
            harga: 10000
        },
        {
            kode: '002',
            nama: 'Barang B',
            harga: 15000
        },
        {
            kode: '003',
            nama: 'Barang C',
            harga: 20000
        }

    ];

    function tampilkanDaftarBarang() {
        var tbody = document.getElementById('daftarbarang');
        tbody.innerHTML = '';

        dataBarang.forEach(function (barang) {
            var row = document.createElement('tr');
            row.innerHTML = '<td>' + barang.kode + ' </td><td>' + barang.nama + '</td><td>' + barang.harga + '</td>';
            tbody.appendChild(row);
        });
    }

    function handleSubmit() {
        var inputKode = document.getElementById('inputanuser').value;
        var inputBanyakBarang = document.getElementById('inputanuser-banyak').value;
        var barangTerpilih = dataBarang.find(function (barang) {
            return barang.kode === inputKode;
        });

        if (barangTerpilih) {
            var totalHarga = barangTerpilih.harga * inputBanyakBarang;
            alert('Total Pembayaran Adalah : ' + totalHarga);
            prompt('Masukkan Uang Anda : ');
        } else {
            alert('Barang dengan kode ' + inputKode + ' tidak ditemukan.');
        }

    }

    tampilkanDaftarBarang();


    var submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', handleSubmit);
});