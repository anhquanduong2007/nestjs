> Như ở phần register thì chúng ta phải đưa vào module posts và users thì nó rất là không hợp lí vì nhiều lúc chúng ta cần sửa và set lại cái dirname thì không hay thì lúc này
người ta sẽ chia cái register ra làm 2 cái đó chính là:
> * forRoot: ví dụ forRoot ở đây mình sẽ chỉ định cái dirname thôi, nghĩa là mình chỉ định root thôi ở đây là dirname  -> chỉ cần đặt trong app module
> * forFeature: ví dụ ở đây mình sẽ chỉ định nghĩa là từng cái modules nào, ví dụ như users thì mình chỉ cần dùng cái feature chỉ định users thôi ở đây là filename -> đặt trong các modules cần

> root -> dirname

> feature -> user -> user.json


> feature -> post -> post.json