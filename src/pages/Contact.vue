<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-text-primary mb-4">單一洽案窗口及聯繫方式</h1>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- 區塊一：聯繫資訊卡 -->
      <a-card class="bg-background-card shadow-sm border border-line rounded-xl">
        <h2 class="text-2xl font-bold text-text-primary mb-6">聯絡我們</h2>
        <div class="space-y-6">
          <div class="flex items-center">
            <div class="bg-primary/10 p-3 rounded-full mr-4 text-primary text-xl">
              <UserOutlined />
            </div>
            <div>
              <h3 class="text-sm font-medium text-text-secondary">承辦人</h3>
              <p class="text-lg font-bold text-text-primary">【請填入：負責人姓名】 【請填入：職稱】</p>
            </div>
          </div>

          <div class="flex items-center">
            <div class="bg-primary/10 p-3 rounded-full mr-4 text-primary text-xl">
              <PhoneOutlined />
            </div>
            <div>
              <h3 class="text-sm font-medium text-text-secondary">聯絡電話</h3>
              <p class="text-lg font-bold text-text-primary">【請填入：(04) XXXX-XXXX 分機 XXXX】</p>
            </div>
          </div>

          <div class="flex items-center">
            <div class="bg-primary/10 p-3 rounded-full mr-4 text-primary text-xl">
              <MailOutlined />
            </div>
            <div>
              <h3 class="text-sm font-medium text-text-secondary">電子信箱</h3>
              <p class="text-lg font-bold text-primary hover:underline">
                <a href="mailto:responsible-ai@hospital.org.tw">【請填入：responsible-ai@hospital.org.tw】</a>
              </p>
            </div>
          </div>

          <div class="flex items-center">
            <div class="bg-primary/10 p-3 rounded-full mr-4 text-primary text-xl">
              <ClockCircleOutlined />
            </div>
            <div>
              <h3 class="text-sm font-medium text-text-secondary">服務時間</h3>
              <p class="text-lg font-bold text-text-primary">週一至週五 08:00–17:00</p>
            </div>
          </div>
        </div>
      </a-card>

      <!-- 區塊三：線上詢問表單 -->
      <a-card class="bg-background-card shadow-sm border border-line rounded-xl">
        <h2 class="text-2xl font-bold text-text-primary mb-6">線上詢問</h2>
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
            <a-button type="primary" html-type="submit" class="w-full bg-primary hover:bg-primary-hover border-none text-white">
              送出詢問
            </a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </div>
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
