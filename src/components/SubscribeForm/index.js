import React from 'react';

const SubscribeForm = () => {
    return (
        <div className="subscribe-container">
            <h2>订阅注册</h2>
            <p>提交邮箱订阅注册,获取Chat2CMD得免费Token密钥</p>
            <form action="YOUR_MAILCHIMP_FORM_ACTION_URL" method="post">
                <input type="email" name="EMAIL" placeholder="输入您的邮箱地址" required />
                <input type="submit" value="免费订阅" />
            </form>

            <style jsx>{`
        .subscribe-container {
          background-color: #f1f1f1;
          padding: 10px;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .subscribe-container h2 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .subscribe-container p {
          font-size: 16px;
          margin-bottom: 20px;
        }

        .subscribe-container form {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .subscribe-container input[type="email"] {
          padding: 10px;
          border-radius: 4px;
          border: 1px solid #ccc;
          width:300px;
          margin-right: 10px;
        }

        .subscribe-container input[type="submit"] {
          padding: 10px 20px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .subscribe-container input[type="submit"]:hover {
          background-color: #0056b3;
        }
      `}</style>
        </div>
    );
};

export default SubscribeForm;
