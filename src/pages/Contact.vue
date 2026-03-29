<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-primary mb-4">單一洽案窗口及聯繫方式</h1>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- 區塊一：聯繫資訊卡 -->
      <a-card class="shadow-lg rounded-xl border-t-4 border-t-primary">
        <h2 class="text-2xl font-bold text-primary mb-6">聯絡我們</h2>
        <div class="space-y-6">
          <div class="flex items-center">
            <div class="bg-blue-100 p-3 rounded-full mr-4 text-primary text-xl">
              <UserOutlined />
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-500">承辦人</h3>
              <p class="text-lg font-bold text-gray-900">【請填入：負責人姓名】 【請填入：職稱】</p>
            </div>
          </div>

          <div class="flex items-center">
            <div class="bg-green-100 p-3 rounded-full mr-4 text-green-600 text-xl">
              <PhoneOutlined />
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-500">聯絡電話</h3>
              <p class="text-lg font-bold text-gray-900">【請填入：(04) XXXX-XXXX 分機 XXXX】</p>
            </div>
          </div>

          <div class="flex items-center">
            <div class="bg-orange-100 p-3 rounded-full mr-4 text-orange-600 text-xl">
              <MailOutlined />
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-500">電子信箱</h3>
              <p class="text-lg font-bold text-primary hover:underline">
                <a href="mailto:responsible-ai@hospital.org.tw">【請填入：responsible-ai@hospital.org.tw】</a>
              </p>
            </div>
          </div>

          <div class="flex items-center">
            <div class="bg-purple-100 p-3 rounded-full mr-4 text-purple-600 text-xl">
              <ClockCircleOutlined />
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-500">服務時間</h3>
              <p class="text-lg font-bold text-gray-900">週一至週五 08:00–17:00</p>
            </div>
          </div>
        </div>
      </a-card>

      <!-- 區塊三：線上詢問表單 -->
      <a-card class="shadow-lg rounded-xl">
        <h2 class="text-2xl font-bold text-primary mb-6">線上詢問</h2>
        <a-form layout="vertical" @finish="onSubmit">
          <a-form-item label="姓名" name="name" :rules="[{ required: true, message: '請輸入姓名' }]">
            <a-input v-model:value="formData.name" placeholder="請輸入姓名" />
          </a-form-item>
          <a-form-item label="單位" name="unit" :rules="[{ required: true, message: '請輸入單位' }]">
            <a-input v-model:value="formData.unit" placeholder="請輸入所屬單位" />
          </a-form-item>
          <a-form-item label="聯絡信箱" name="email" :rules="[{ required: true, type: 'email', message: '請輸入有效的電子信箱' }]">
            <a-input v-model:value="formData.email" placeholder="請輸入電子信箱" />
          </a-form-item>
          <a-form-item label="問題描述" name="message" :rules="[{ required: true, message: '請輸入問題描述' }]">
            <a-textarea v-model:value="formData.message" :rows="4" placeholder="請詳細描述您的問題..." />
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit" class="w-full bg-accent hover:bg-green-600 border-none">
              送出詢問
            </a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </div>

    <!-- 區塊二：地圖 -->
    <section>
      <h2 class="text-2xl font-bold text-primary mb-6 text-center">辦公室位置</h2>
      <div class="bg-white p-2 rounded-xl shadow-lg h-96 flex items-center justify-center border-2 border-dashed border-gray-300">
        <span class="text-gray-500">【請填入：辦公室 Google Maps 嵌入網址 (iframe)】</span>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Modal } from 'ant-design-vue'
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined
} from '@ant-design/icons-vue'

const formData = reactive({
  name: '',
  unit: '',
  email: '',
  message: ''
})

const onSubmit = () => {
  Modal.success({
    title: '詢問已送出',
    content: '感謝您的來信！我們已收到您的問題，並將盡快透過電子郵件與您聯繫。',
    okText: '確認'
  })
  // Reset form
  formData.name = ''
  formData.unit = ''
  formData.email = ''
  formData.message = ''
}
</script>
