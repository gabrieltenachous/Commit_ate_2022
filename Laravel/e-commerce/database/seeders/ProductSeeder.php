<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Db::table('products')->insert([
            "name"=>"LG mobile",
            "price"=>"200",
            "description"=>"A smarthphone whith 4 gb ram and much more feature",
            "category"=>"mobile",
            "gallery"=>"https://www.lg.com/br/images/celulares/md07515798/gallery/D_01.jpg",
        ]);

        Db::table('products')->insert([
            "name"=>"SAMSUNG X30",
            "price"=>"5000",
            "description"=>" Notebook Samsung Book X30 Intel Core i5 8GB 1TB - 15,6” Windows 10 ",
            "category"=>"notebook",
            "gallery"=>"https://a-static.mlcdn.com.br/618x463/notebook-samsung-book-x30-intel-core-i5-8gb-1tb-156-windows-10/magazineluiza/225395400/1686bb5ef5ac278b8948e4573c88bfc0.jpg",
        ]); 
        Db::table('products')->insert([
            "name"=>"LG mobile",
            "price"=>"7000",
            "description"=>"iPhone 12 Pro Max Apple 256GB Grafite Tela de 6,7”, Câmera Tripla de 12MP, iOS",
            "category"=>"mobile",
            "gallery"=>"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHKQ3?wid=890&hei=890&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1601144071000",
        ]);
        Db::table('products')->insert([
            "name"=>"Samsung A71",
            "price"=>"1200",
            "description"=>" Smartphone Samsung Galaxy A71 128GB Cinza 4G - 6GB RAM 6,7” Câm. Quádrupla + Selfie 32MP ",
            "category"=>"mobile",
            "gallery"=>"https://a-static.mlcdn.com.br/618x463/smartphone-samsung-galaxy-a71-128gb-cinza-4g-6gb-ram-67-cam-quadrupla-selfie-32mp/magazineluiza/155587200/a6d66dd854f81b06f24882f9488e1bfa.jpg",
        ]);
    }
}
