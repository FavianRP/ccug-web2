exports.seed = async function(knex) {
    // Hapus semua data lama
    await knex('contests').del();
  
    // Insert data
    await knex('contests').insert([
        {
            "id": 1,
            "name": "EHAX CTF 2025",
            "place": 77,
            "date_start": "2025-02-15",
            "date_end": "2025-02-16",
            "rating": 3.040,
            "points": 1234,
            "ctftime_url": "https://ctftime.org/event/1234"
          },
    ]);    
  };
  