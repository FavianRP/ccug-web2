exports.seed = async function(knex) {
    // Hapus semua data lama
    await knex('members').del();
  
    // Insert data
    await knex('members').insert([
      {
        name: 'Alice Cyber',
        position: 'pwn',
        photo_url: '/img/CCUG_Logo_with_Text.png',
        bio: 'Ketua CCUG 2025'
      },
      {
        name: 'Bob Security',
        position: 'crypto',
        photo_url: '/img/CCUG_Logo_with_Text.png',
        bio: 'Ahli keamanan siber'
      },
      {
        name: 'Charlie Hackerman',
        position: 'forensic',
        photo_url: '/img/CCUG_Logo_with_Text.png',
        bio: 'Suka capture the flag'
      }
    ]);    
  };
  