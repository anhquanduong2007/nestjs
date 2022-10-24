> Thực tế, các controller sẽ không xử lý trực tiếp các logic mà cái thành phần controller của chúng ta chỉ nhận nhiệm vụ là nhận dữ liệu đầu vào và trả dữ liệu đầu ra thôi, còn cái nơi xử lý của mình sẽ là một nơi khác. Và cái nơi đó gọi là service.

> Ví dụ chúng ta đang có 1 controller và nó đang phụ thuộc vào user service và thằng user service của chúng ta lại phụ thuộc vào thằng user repository, giả sử sau này, chúng ta lại có 1 thằng khác nữa, chẳng hạn 1 thằng security nó cần lấy dữ liệu của user thì nó lại phải phụ thuộc vào thằng user service thì cái mô hình phụ thuộc như thế này, trong thực tế một khi dự án càng ngày càng lớn thì chúng ta rất khó quản lí các instance bởi vì chúng cứ phụ thuộc lung ta, lung tung do đó nestjs đã hỗ trợ chúng ta 1 cái gọi là Dependency Injection Patterns có nghĩa là lúc đó chúng ta không cần phải tạo từ khóa new nữa mà Nestjs có một thành phần gọi là container để nó chứa tất cả những instance ví dụ như user service các thứ, trong này nó sẽ có nhiệm vụ là new user service cho chúng ta, new một service nào đó, ... và sau đó khi chúng ta cần sử dụng thì chỉ cần lấy từ trong cái thằng container này ra cái thực thể chúng ta dùng thôi.

> Demo mô phỏng  Dependency Injection hoạt động   [Demo](https://www.typescriptlang.org/play?#code/MYGwhgzhAECqEFMBOBlZA3AlsB0DeAsAFDSnQAWCIIA9gBQCUAXOjZgCb7Fk-TA0A7CDRAIAdLQDmdAOSVqNGQ25kAvsXVFioSDHjIASggAONCJgAuNJAE8uJMhYQQLjFm06EHvPoOGiJGmkZC3JMGHDoJBMzS2sbJRVSTU1tcChoAEkBACsEYCskex5jJEx0MCdoAH1+AQswTAFkaABeaGaAd2gAWTBjRgBuJN8hCyQAVwLrOlLyytxq0posdmQIJmgwARsAbQBdNugDhi8fUlDwsSWkFY51sQAzawBRMGByOkQkLBw2gD5oJcINc6g0msgxIhXN9fggADRdaCw7AIRgMBjDbzQVLYyQIGEYVEAaQQNk22xspxGPDqLmRRJw2Rc2z+7WBoME4OaSDE+MJPxJZMxNLImEedAAhCimWNWQhqdjzkDyLdui8kLckLIAHI0aDLVYtAQ0CzQZ4TATsJRY5WaZXRCwTJACBmC2UsgQ4W1qDTEbR+M1NPIFI5I7Ihwp0Xb6VCMhGxoymcyFGz7EVEOlmibfNDu3DtYP5Cx8gl0WN5uEZnPISuosTyWhDANjKIxI5Fgql1yJmIp+IZ6KmMROFyMIA)


> Trong nestjs mỗi module sẽ có một injector riêng để nó quản lí những cái mà chúng ta đang provide vào, nestjs sẽ có 2 cấp độ mở của thằng injector đó chính là injectorglobal và injector theo module.


> Lưu ý: Dù thằng app module là thằng chính nhưng về bản chất nó cũng chỉ là một module thôi và các module luôn riêng biệt nhau.